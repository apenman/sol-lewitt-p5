var bounds = [];

function setup() {
  // create canvas
  createCanvas(1000,1000);
  background(255);
  // get boundaries
  for(var i = 0; i < 4; i++) {
    bounds[i] = [];
  }
  bounds[0][0] = 25;
  bounds[0][1] = 25;
  bounds[1][0] = 950;
  bounds[1][1] = 25;
  bounds[2][0] = 950;
  bounds[2][1] = 950;
  bounds[3][0] = 25;
  bounds[3][1] = 950;
}

function drawSliced() {
  stroke(0);
  strokeWeight(1);
  
  for(var i = 25; i <= 950; i+=925/15) {
    line(i, 25, i, 950);
  }
   
  
}

function draw() {
  stroke(0);
  strokeWeight(0.25);
  // draw bounding lines
  for(var i = 0; i < bounds.length; i++) {
    var j = i == bounds.length - 1 ? 0 : i+1;
    line(bounds[i][0], bounds[i][1], bounds[j][0], bounds[j][1]);
  }
  
  drawSliced();
  
  stroke(0);
  strokeWeight(0.25);
  for(var i = bounds[0][0]; i < bounds[1][0]; i+=25) {
    // draw vertical lines
    line(i, 950, i, 25);
    // draw horizontal lines
    line(950,i,25,i)
  }
  
  // draw diagonal lines
  // var i = 0;
  
  // OPTIONS WHERE DIAGONALS DONT LINE UP PERFECT BUT ARE EQUALLY SPACED
  // while(i < sqrt(sq(775)*2)/2) {
  //   var lob = sqrt( sq((25+i)) * 2);
  //   console.log("Lob at " + i + " is " + lob);
    
  //   line(25, lob, lob, 25);

  //   i += 25;
  // }
  
  // while(i > 25) {
  //   var lob = sqrt( sq((25+i)) * 2);
  //   console.log("Lob at " + i + " is " + lob);
    
  //   line(lob, 775, 775, lob);
    
  //   i-=25;
  // }
  
  // OPTION WHERE DIAGONALS SPACED ON ENDS OF GRID
  // while(i <= 775 / 2) {
  //   line(25, 2*i, 2*i, 25);
  //   i+=25;
  // }
  
  // i=775;
  // while(i > 25) {
  //   line(2*i, 775, 775, 2*i);
  //   i-=25;
  // }
  
  
  noLoop();
}