window.onload = function(){
	const now = new Date();
	
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	
	alert(year + "年" + month + "月" + date + "日" + hours + "時" + minutes + "分" + seconds + "秒" );
 }