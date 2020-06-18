window.onerror = function (message, source, lineNo, coumnNo, error) {
	
	//引数の説明
	//第1引数...message: エラーのメッセージ;
	//第2引数...source: エラーが発生したソース;
	//第3引数...lineNo: エラーが発生した行数;
	//第4引数...columnNo: エラーが発生した列数;
	//第5引数...error: Errorオブジェクト;
	console.log({message, source, lineNo, columnNo, error});
	alert(message);
}

function clickHandler() {
	throw new Error("My Error Message");
}