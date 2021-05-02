var chartFlag = false;

$(window).on("scroll", Schart);

function Schart() {
  if ($(window).scrollTop() >= 400) {
    if (!chartFlag) {
      chartFlag = true;
      draw(80, ".Html", "#454545");
      draw(80, ".Css", "#454545");
      draw(50, ".Js", "#454545");
      draw(60, ".Jq", "#454545");
      draw(70, ".Ps", "#454545");
    }
  } else {
    chartFlag = false;
  }
}

function draw(max, classname, colorname) {
  var i = 1;
  var func1 = setInterval(function () {
    if (i < max) {
      color1(i, classname, colorname);
      i++;
    } else {
      clearInterval(func1);
    }
  }, 10);
}

function color1(i, classname, colorname) {
  $(classname).css({
    background:
      "conic-gradient(" + colorname + " 0% " + i + "%, #ccc " + i + "% 100%)",
  });
}
