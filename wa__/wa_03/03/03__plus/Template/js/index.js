 function test() {
	var canvas = document.getElementById('sample');
	var context = canvas.getContext( "2d" ) ;
	
	const now = new Date();
	
	const year = now.getFullYear();
	const month = now.getMonth() + 1;
	const date = now.getDate();
	
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	
	const acc__time = (year + "年" + month + "月" + date + "日" + hours + "時" + minutes + "分" + seconds + "秒" );
	
	// パスをリセット
	//context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	context.beginPath () ;
	
	// フォントを設定
	context.font = "bold 24px Arial, meiryo, sans-serif" ;
	
	// テキストの色
	context.fillStyle = "rgba( 255, 0, 0, 0.8 )" ;
	
	// 位置(0,24)からサイズ(200,100)の範囲にテキストを描画する
	context.fillText( acc__time, 0, 24, 200, 100 ) ;
	context.fillText( acc__time + "です",0,24,200,100);
	
	//setTimeout(test(), 1000)
 }