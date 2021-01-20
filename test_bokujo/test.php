<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Document</title>
</head>
<body>
    
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>    
    let a = 0;
    function get_data(){
        $.ajax({
            url: "sample.php",
            method: "POST",
        })
        .done(function(data){
            a = data;
            console.log(data);
        });
    }
</script>
</body>
</html>