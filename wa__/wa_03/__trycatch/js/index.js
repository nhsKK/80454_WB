function check(){
	try {
		const password = document.getElementById("password");
		
		if(!password.value){
			throw new Error("パスワードを入力してください");
		}
		if (password.value.length < 8) {
			throw new Error("8文字以上で入力してください");8
		}
	} catch (err) {
		const errorMessage = document.getElementById("error-message");
		errorMessage.innerHTML = err.message;
	}
}