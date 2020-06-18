function keydownHandler(){
	const textField = document.getElementById("text-field");
	console.log("textField.value");
	
	const keydownVal = document.getElementById("keydown-vl");
	const keydownText = document.getElementById("keydown");
	
	keydownText.HTML = textField.value;
	
	keydownVal.value = textField.value;
}