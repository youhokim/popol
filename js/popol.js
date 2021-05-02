//버튼 클릭 효과
$(".PbuttonBox .Pbutton").hover(function(){
    $(".Pbutton").removeClass("on");
    $(this).addClass('on').siblings().removeClass('on');
    $(this).children().css({"color":"#454545"});
}, function(){
    $(".Pbutton").removeClass("on");
    $(this).children().css({"color":"#fff"});
});
// 스크롤에 따라 콘텐츠 나타내기
$(window).on("scroll",ConFade);

function ConFade(){
    var scrollTop=$(window).scrollTop();
    console.log(scrollTop);
    if(scrollTop>1000){
        $(".ani.one").css("display","block");
    }
    if(scrollTop>1990){
        $(".ani.two").css("display","block");
    }
    if(scrollTop>2282){
        $(".ani.three").css("display","block");
    }
    if(scrollTop>2870){
        $(".ani.four").css("display","block");
    }
}