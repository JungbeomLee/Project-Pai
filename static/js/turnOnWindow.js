//id window 를 windowColor로 저장
var windowColor = document.getElementById("window").style;
//창문 불 노란색 file-upload-btn 호버시
function turnOnWindowYellow(){
    windowColor.backgroundColor = "#fed072";
    windowColor.boxShadow = "0 0 10px 0.4px #fed072";
}
//창문 불 빨간색 remove-image 호버시
function turnOnWindowRed(){
    windowColor.backgroundColor = "#D90D1E";
    windowColor.boxShadow = "0 0 10px 0.4px #D90D1E";
}
//창문 불 연두색 file-upload-to-server 호버시
function turnOnWindowGreen(){
    windowColor.backgroundColor = "#2DE388";
    windowColor.boxShadow = "0 0 10px 0.4px #2DE388";
}
//창문 불 끄기
function turnOffWindow(){
    windowColor.backgroundColor = "#073636";
    windowColor.boxShadow = "0 0 10px 0.4px rgba(254, 208, 114, 0)";
}