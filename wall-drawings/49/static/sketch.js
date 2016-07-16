var bounds = [];

function setup() {
  // create canvas
  createCanvas(800,800);
  background(255);
  // get boundaries
  for(var i = 0; i < 4; i++) {
    bounds[i] = [];
  }
  bounds[0][0] = 25;
  bounds[0][1] = 25;
  bounds[1][0] = 775;
  bounds[1][1] = 25;
  bounds[2][0] = 775;
  bounds[2][1] = 775;
  bounds[3][0] = 25;
  bounds[3][1] = 775;
}

function draw() {
  stroke(0);
  strokeWeight(0.25);
  // draw bounding lines
  for(var i = 0; i < bounds.length; i++) {
    var j = i == bounds.length - 1 ? 0 : i+1;
    line(bounds[i][0], bounds[i][1], bounds[j][0], bounds[j][1]);
  }
  
  for(var i = bounds[0][0]; i < bounds[1][0]; i+=25) {
    // draw vertical lines
    line(i, 775, i, 25);
    // draw horizontal lines
    line(775,i,25,i)
  }
  
  // draw diagonal lines
  
  noLoop();
}