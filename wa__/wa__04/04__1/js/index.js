var name__flag = 0;
var tel__flag = 0;
	
	
	
function err__test() {
	
	var ninp = $("#name__inp").val();
	
	try {
		if (!ninp) {
			throw  new Error("名前を入力してください");
		}
	}catch (e) {
		if (name__flag == 0) {
			$("#name").append('<p id="name__error">' + e.message + '</p>');
			
			name__flag = 1;
		}else {
			$("#name__error").text(e.message);
		}
	}
	
	
	
	var tinp = $("#tel__inp").val();
	
	try {
		if (!tinp) {
			throw new Error("電話番号を入力してください");
		}
	}catch (e) {
		if (tel__flag == 0) {
			$("#tel").append('<p id="tel__error">' + e.message + '</p>');
			
			tel__flag = 1;
		}else {
			$("#tel__error").text(e.message);
		}
	}
	
	
	
	var numVal = /^[0-9]+$/ ;
	
	try {
		if(numVal.test(tinp) == false) {
			throw new Error("半角英数字を入力してください");
		}
	}catch (e) {
		if (!tinp) {
		}else {
			if (tel__flag == 0) {
				$("#tel").append('<p id="tel__error">' + e.message + '</p>');
				
				tel__flag = 1;
			}else {
				$("#tel__error").text(e.message);
			}
		}
	}
	
	if (ninp) {
		if (name__flag == 0) {
		}else {
			$("#name__error").text("");
		}
	}
	
	if (tinp && numVal.test(tinp) == true) {
		if (tel__flag == 0) {
		}else {
			$("#tel__error").text("");
		}
	}
}