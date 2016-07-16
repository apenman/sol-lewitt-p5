var xPoints = [];
var yPoints = [];
var numPoints = 50;
var currLineStep = 0.0;
var i = 0;
var j = 0;

function setup() {
  createCanvas(800,800);
  background(255);

  for(var i = 0; i < numPoints; i++) {
    xPoints[i] = random(800 - 100);
    yPoints[i] = random(800 - 100);
  }
  
  i = 0;
  j = 1;
}

function drawPoints() {
  for(var d = 0; d < numPoints; d++) {
    point(xPoints[d],yPoints[d])
  } 
}

function animateLine() {
  // Use lerp() to calc point between x's and y's
  var newX = lerp(xPoints[i], xPoints[j], currLineStep);
  var newY = lerp(yPoints[i], yPoints[j], currLineStep);
  
  stroke(0);
  strokeWeight(0.25);
  
  line(xPoints[i], yPoints[i], newX, newY);

  if(currLineStep < 1.0)
    currLineStep += 0.2;
  else {
    if(j < numPoints - 1) {
      j++;
    }
    else {
      j = 0;
      i++;
      // END OF ANIMATION
      if(i == numPoints) {
        console.log("DONE!");
        noLoop();
      }
    }
    currLineStep = 0.0;
  }
}

function draw() {  
  drawPoints();
  animateLine();
}