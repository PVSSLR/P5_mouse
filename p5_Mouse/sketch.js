var circleX = 10;
var CircleY = 10;
function setup() {
  createCanvas(1920, 1080);
  background(119, 119, 119);
}

function draw() {
  
  fill(255,0,0);
  //circle(100,mouseX,50);
  circle(CircleY,500 - CircleY,50);
  circle(CircleY,circleX,50);
  circle(circleX,CircleY,50);
  circle(CircleY+100,circleX,50);
  circle(circleX,CircleY+300,50);
  circleX = circleX + 5; 
  CircleY = CircleY + 5;
}

function mousePressed() {
   background(119, 119, 119);
}