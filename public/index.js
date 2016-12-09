window.onload = function() {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');

  var hue = 1;

  context.lineWidth = 10;

  var circle = function(x, y) {
    context.beginPath();
    context.arc(x,y,50,0,Math.PI*2,true);
    context.stroke();
  }

  var changeColour = function(){  
    hue += 10;
    context.strokeStyle = "hsla(" + hue + ", 100%, 50%, 1)";
  }

  canvas.onmousemove = function(event) {
    changeColour();
    circle(event.x, event.y);
  }

};
