const slide__01 = $("#slide01");
const slide__02 = $("#slide02");
const slide__03 = $("#slide03");
const slide__04 = $("#slide04");
const slide__05 = $("#slide05");

const slide01__bg = $(slide__01).css("background-image");
const slide02__bg = $(slide__02).css("background-image");
const slide03__bg = $(slide__03).css("background-image");
const slide04__bg = $(slide__04).css("background-image");
const slide05__bg = $(slide__05).css("background-image");

var time01;
var time02;
var time03;
var time04;
var time05;

window.onload = function(){
    
    $('#slide__nav--01').css("background-image",slide01__bg);
    $('#slide__nav--02').css("background-image",slide02__bg);
    $('#slide__nav--03').css("background-image",slide03__bg);
    $('#slide__nav--04').css("background-image",slide04__bg);
    $('#slide__nav--05').css("background-image",slide05__bg);
    
    setTimeout(function() {
        anime();
        slide__act();
    }, 5000);
}

function anime(){
  slide__01.animate({right:"100%"});
  slide__02.animate({left:"0"});
  slide__03.animate({left:"100%"});
  slide__04.animate({left:"200%"});
  slide__05.animate({left:"300%"});
  
    time02 = setTimeout(function(){
        anime2();
        slide__act2();  
    },5000);
  
}
function anime2(){
  slide__02.animate({left:"-100%"});
  slide__01.animate({right:"200%"});
  slide__03.animate({left:"0"});
  slide__04.animate({left:"100%"});
  slide__05.animate({left:"200%"});
  
    time03 = setTimeout(function() {
        anime3();
        slide__act3();
    },5000);
  
}
function anime3(){
  slide__02.animate({left:"-200%"});
  slide__01.animate({right:"300%"});
  slide__03.animate({left:"-100%"});
  slide__04.animate({left:"0%"});
  slide__05.animate({left:"100%"});
  
    time04 = setTimeout(function() {
        anime4();
        slide__act4();
    },5000);
  
}
function anime4(){
  slide__02.animate({left:"-300%"});
  slide__01.animate({right:"400%"});
  slide__03.animate({left:"-200%"});
  slide__04.animate({left:"-100%"});
  slide__05.animate({left:"000%"});
  
    time05 = setTimeout(function() {
        anime5();
        slide__act5();
    },5000);
  
}
function anime5(){
  slide__03.animate({left:"200%"});
  slide__02.animate({left:"100%"});
  slide__01.animate({right:"00%"});
  slide__04.animate({left:"300%"});
  slide__05.animate({left:"400%"});
  
    time01 = setTimeout(function(){
        slide__act();
        anime();
    },5000);

}



function slide__act(){
  
    $('#slide__nav--01').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--02').animate({width:"80px", height:"80px", margin:"0 2.5px 0 2.5px"});
    $('#slide__nav--03').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--04').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--05').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
  
};

function slide__act2(){
  
    $('#slide__nav--01').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--02').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--03').animate({width:"80px", height:"80px", margin:"0 2.5px 0 2.5px"});
    $('#slide__nav--04').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--05').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
  
};

function slide__act3(){
  
    $('#slide__nav--01').animate({width:"50px", height:"50px", margin:"15px 2.5pxpx 0 2.5px"});  
    $('#slide__nav--02').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--03').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--04').animate({width:"80px", height:"80px", margin:"0px 2.5px 0 2.5px"});
    $('#slide__nav--05').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
  
};

function slide__act4(){
  
    $('#slide__nav--01').animate({width:"50px", height:"50px", margin:"15px 2.5pxpx 0 2.5px"});  
    $('#slide__nav--02').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--03').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--04').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--05').animate({width:"80px", height:"80px", margin:"0px 2.5px 0 2.5px"});
  
};

function slide__act5(){
  
    $('#slide__nav--01').animate({width:"80px", height:"80px", margin:"0px 2.5pxpx 0 2.5px"});  
    $('#slide__nav--02').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--03').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--04').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
    $('#slide__nav--05').animate({width:"50px", height:"50px", margin:"15px 2.5px 0 2.5px"});
  
};

function slide__01func(){
    
    clearTimeout(time01);
    clearTimeout(time02);
    clearTimeout(time03);
    clearTimeout(time04);
    clearTimeout(time05);
    
    anime5();
    slide__act5();
  
}

function slide__02func() {
    
    clearTimeout(time01);
    clearTimeout(time02);
    clearTimeout(time03);
    clearTimeout(time04);
    clearTimeout(time05);
    
    anime();
    slide__act();
    
}

function slide__03func(){
    
    clearTimeout(time01);
    clearTimeout(time02);
    clearTimeout(time03);
    clearTimeout(time04);
    clearTimeout(time05);
    
    anime2();
    slide__act2();
    
}

function slide__04func(){
    
    clearTimeout(time01);
    clearTimeout(time02);
    clearTimeout(time03);
    clearTimeout(time04);
    clearTimeout(time05);
    
    anime3();
    slide__act3();
    
}

function slide__05func(){
    
    clearTimeout(time01);
    clearTimeout(time02);
    clearTimeout(time03);
    clearTimeout(time04);
    clearTimeout(time05);
    
    anime4();
    slide__act4();
    
}