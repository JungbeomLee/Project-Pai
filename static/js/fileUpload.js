//사진을 업로드 하는 함수
function readURL(input) {
    if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = function (e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-btn').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
            $('.file-upload-content-2').show();
            $('.file-upload-to-server').show();

            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}
//업로드되 사진을 지우면 페이지를 이동하는 코드
console.log()
function handleFileSelect(event) {
    var input = this;
    console.log(input.files)
    if (input.files && input.files.length) {
        var reader = new FileReader();
        this.enabled = false
        reader.onload = (function (e) {
        console.log(e)
            $(".file-upload-content").html(['<img class="file-upload-image" src="', e.target.result, '" title="', escape(e.name), '"/>'].join(''))
        });
        reader.readAsDataURL(input.files[0]);
    }
}
$('#file').change(handleFileSelect);
$('.file-edit-icon').on('click', '.preview-de', function () {
    location.href="http://127.0.0.1:8000/main/remove"
});