var xPoints = [];
var yPoints = [];
var numPoints = 50;

function setup() {
  createCanvas(800,800);
  background(255);
  
  for(var i = 0; i < numPoints; i++) {
    xPoints[i] = random(800 - 100);
    yPoints[i] = random(800 - 100);
  }
}

function draw() {  
  stroke(0);
  strokeWeight(0.25);
  for(var i = 0; i < numPoints; i++) {
    for(var j = i; j < numPoints; j++) {
      line(xPoints[i], yPoints[i], xPoints[j], yPoints[j])
    }
  }
  noLoop();
}