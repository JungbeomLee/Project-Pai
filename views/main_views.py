from flask import Flask , render_template, request
from flask import Blueprint
import string
import random
from werkzeug.utils import secure_filename
from PIL import Image
import os

bp = Blueprint('main', __name__, url_prefix='/')
_LENGTH = 5
string_pool = string.ascii_letters + string.digits

#404에러시 에러 페이지 보여줌
@bp.app_errorhandler(404)
def handle_404(err):
    return render_template('error/404.html'), 404

#메인링크
@bp.route('/main')
def main():
    return render_template('index.html')

#파일 업로드 저장
@bp.route('/main', methods = ['GET', 'POST'])
def uploader_file():
    if request.method == 'POST':
        
        # 랜덤한 문자열 생성 
        randomName = "" 
        for i in range(_LENGTH) : 
            randomName += random.choice(string_pool) # 랜덤한 문자열 하나 선택

        #업로드 파일 
        f = request.files['file']

        #static 아래 img에 사진 저장
        f.save('AImodule/img/'+secure_filename(randomName+f.filename))

        #업로드된 이미지 이름 저장
        AImoduleName = randomName+f.filename

        return render_template('index.html') 


#업로드된 이미지 삭제시 페이지 이동
@bp.route('/main')
def img_remove():
    return render_template('index.html')

