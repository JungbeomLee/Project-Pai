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

//업로드된 사진을 지우는 함수
function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.file-upload-content-2').hide();
    $('.file-upload-to-server').hide();

    $('.image-upload-wrap').show();
    $('.file-upload-btn').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});