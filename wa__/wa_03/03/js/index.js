var d__time =  0;
var flag__d = 0;

window.onload = function(){
	
	const now = new Date();
	
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	
	const acc__time = (year + "年" + month + "月" + date + "日" + hours + "時" + minutes + "分" + seconds + "秒" );
	
	
	
	$('#acc__time').append('<p>' + acc__time + '</p>');
	
	$('#t__time').append('<p id="t__time--cnt">' + d__time + '<p>');
	
	access__count();
	
}

function access__count() {
	
	setTimeout(function(){
		
		cnt__time();
		
	}, 1000);
	
}

function cnt__time(){
	
	var t__cnt = $('#t__time--cnt');
		
	d__time++;
		
	$(t__cnt).text(d__time);
	
	
	
	setTimeout(function(){
		
		cnt__time();
		
	}, 1000);
	
}

function now__date() {
	
	const now = new Date();
	
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	
	const acc__time = (year + "年" + month + "月" + date + "日" + hours + "時" + minutes + "分" + seconds + "秒" );
	
	
	if (flag__d == 0) {
		
		$('#n__time').append('<p id="n__time--p">' + acc__time + '</p>');
		
		flag__d++;
		
	}else {
		$('#n__time--p').text(acc__time);
	}
	
}