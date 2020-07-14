const slide__01 = $("#iuiu");
const slide__02 = $("#uiui");
const slide__03 = $("#uiiu");

var time01;
var time02;
var time03;

window.onload = function(){
    setTimeout(function() {
        anime();
        slide__act();
    }, 5000);
}

function anime(){
  slide__01.animate({right:"100%"});
  slide__02.animate({left:"0"});
  slide__03.animate({left:"100%"});
  
    time02 = setTimeout(function(){
        anime2();
        slide__act2();  
    },5000);
  
}
function anime2(){
  slide__02.animate({left:"-100%"});
  slide__01.animate({right:"200%"});
  slide__03.animate({left:"0"});
  
    time03 = setTimeout(function() {
        anime3();
        slide__act3();
    },5000);
  
}
function anime3(){
  slide__03.animate({left:"200%"});
  slide__02.animate({left:"100%"});
  slide__01.animate({right:"0"});
  
    time01 = setTimeout(function(){
        slide__act();
        anime();
    },5000);

}



function slide__act(){
  
    $('#slide__nav--01').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.2.5px"});
    $('#slide__nav--02').animate({width:"80px", height:"80px", margin:"0 2.5px 0 2.5px"});
    $('#slide__nav--03').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
  
};

function slide__act2(){
  
    $('#slide__nav--01').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.2.5px"});
    $('#slide__nav--02').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--03').animate({width:"80px", height:"80px", margin:"0 2.5px 0 2.5px"});
  
};

function slide__act3(){
  
    $('#slide__nav--01').animate({width:"80px", height:"80px", margin:"0 2.5pxpx 0 2.5px"});  
    $('#slide__nav--02').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--03').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
  
};

function slide__01func(){
    
    clearTimeout(time01);
    clearTimeout(time02);
    clearTimeout(time03);
    
    anime3();
    slide__act3();
  
}

function slide__02func() {
    
    clearTimeout(time01);
    clearTimeout(time02);
    clearTimeout(time03);
    
    anime();
    slide__act();
    
}

function slide__03func(){
    
    clearTimeout(time01);
    clearTimeout(time02);
    clearTimeout(time03);
    
    anime2();
    slide__act2();
    
}