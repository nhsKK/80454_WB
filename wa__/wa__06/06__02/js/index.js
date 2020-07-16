const url = "https://s3.ap-northeast-1.amazonaws.com/static.tomoktan.com/0716/first.html";
const xhr = new XMLHttpRequest();

xhr.open("GET", url);
xhr.send();

xhr.onload = function () {
    const formWrap = document.getElementById('form__wrap');
    formWrap.innerHTML = xhr.response();
}