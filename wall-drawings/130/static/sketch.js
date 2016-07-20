var bounds = [];

function setup() {
  // create canvas
  createCanvas(700,700);
  background(255);
  // get boundaries
  for(var i = 0; i < 4; i++) {
    bounds[i] = [];
  }
  bounds[0][0] = 25;
  bounds[0][1] = 25;
  bounds[1][0] = 675;
  bounds[1][1] = 25;
  bounds[2][0] = 675;
  bounds[2][1] = 675;
  bounds[3][0] = 25;
  bounds[3][1] = 675;
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
    line(i, 675, i, 25);
    // draw horizontal lines
    line(675,i,25,i)
  }
  
  noFill();
  for(var i = 0; i < 675; i+=25) {
    arc(25, 25, 2*i, 2*i, 0, HALF_PI);
    arc(675, 25, 2*i, 2*i, HALF_PI, PI);
    arc(25, 675, 2*i, 2*i, 3*PI/2, 0);
    arc(675, 675, 2*i, 2*i, PI, 3*PI/2);
  }
  
}