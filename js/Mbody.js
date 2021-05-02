$(".navbars").on("click",function(){    
    $(".navgnb").animate({left:"0px"},500);
});
$(".closeBox").on("click",function(){    
    $(".navgnb").animate({left:"-500px"},500);
});