$(document).ready(function () {
  var loBalls = $(".loContent>ul>li");
  var laIdx = 0;
  var num = 1;
  function numPlus() {
    if (num < 100) {
      num++;
    }

    $("#loading").css("opacity", num);

    $(".loContent p").text(num + "%");
    if (num == 100) {
      clearInterval(LosetInterval);
      clearInterval(numsetInterval);
      setTimeout(function () {
        loBalls.addClass("active");
      }, 500);
      $("#loading").fadeOut(1000);
      $("body").css("overflow", "visible");
      /*bar 나오기*/
      $(".bar1").animate({ right: "-10px" }, 1800);
      $(".bar2").animate({ left: "-20px" }, 1800);
      $(".Msec h3").fadeIn(3000);
      $(".Msec .MsecTxt").fadeIn(4500);

    }
  }

  function LosetTime() {
    laIdx++;
    if (laIdx >= loBalls.length - 1) {
      laIdx = -1;
    }
    loBalls.eq(laIdx).addClass("on").siblings().removeClass("on");
  }

  var LosetInterval = setInterval(LosetTime, 200);
  var numsetInterval = setInterval(numPlus, 50);
});
