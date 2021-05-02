$(window).ready(function(){
   draw(80, '.Html', '#ccc');
  draw(80, '.Css', '#8b22ff');
   draw(50, '.Js','#ff0');
    draw(60, '.Jq','#0f0');
    draw(70, '.Ps','#00f');
});

function draw(max, classname, colorname){
   var i=1;
    var func1 = setInterval(function(){
      if(i<max){
          color1(i,classname,colorname);
          i++;
      } else{
        clearInterval(func1);
      }
    },10);
}
function color1(i, classname,colorname){
   $(classname).css({
        "background":"conic-gradient("+colorname+" 0% "+i+"%, #efeef690 "+i+"% 100%)"
   });
}


