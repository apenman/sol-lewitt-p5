float[] xPoints = new float[50];
float[] yPoints = new float[50];
int numPoints = 50;

void setup() {
  size(800,800, P3D);
  background(255);
  
  for(int i = 0; i < numPoints; i++) {
    xPoints[i] = random(0,800 - 100);
    yPoints[i] = random(0,800 - 100);
  }
}

void draw() {
  stroke(0);
  smooth();
  strokeWeight(0.5);
  for(int i = 0; i < numPoints; i++) {
    for(int j = i; j < numPoints; j++) {
      line(xPoints[i], yPoints[i], xPoints[j], yPoints[j]);
    }
  }
  noLoop();
}