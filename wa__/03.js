function body__loader(){
	alert("読み込み完了");
}
function form__submit(){
	var input__ele = document.getElementById("submit__txt");
	var txt = input__ele.value;
	return confirm( txt + 'を送信しますか？' );
}