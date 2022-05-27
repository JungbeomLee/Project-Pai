//사진을 업로드 하는 함수
function readURL(input) {
    

    var reader = new FileReader();

    reader.onload = function (e) {
        console.log("파일 올라갑니당~");
        $('.image-upload-wrap').hide();
        $('.file-upload-btn').hide();

        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
        $('.file-upload-content-2').show();
        $('.file-upload-to-server').show();
        $('.image-title').html(input.files[0].name);
        document.getElementsByClassName("remove-image")[0].style.display = "block"
        document.getElementsByClassName("file-upload-input")[0].value=null
        
    };
    
    reader.readAsDataURL(input.files[0]);


}
//업로드 사진을 지우면 페이지를 이동하는 코드

$('.file-edit-icon').on('click', '.preview-de', function () {
console.log("지워집니당~");
document.getElementsByClassName('file-upload-image')[0].remove()
newimg = document.createElement('img')
newimg.setAttribute("class", "file-upload-image")
newimg.setAttribute("src", "#")
document.getElementsByClassName('file-upload-content')[0].appendChild(newimg)
document.getElementsByClassName('file-upload-content')[0].style.display = "none"
document.getElementsByClassName("file-upload-btn")[0].style.display = "inline-block"
document.getElementsByClassName("file-upload-to-server")[0].style.display = "none"
document.getElementsByClassName("remove-image")[0].style.display = "none"
$('.image-upload-wrap').show();
$('.file-upload-btn').show();
});