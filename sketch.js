function setup() {
  createCanvas(1920, 1080);
  background(119, 119, 119);
}

function draw() {
  
  fill(255,0,0);
  //circle(100,mouseX,50);
  circle(mouseY,500 - mouseY,50);
  circle(mouseY,mouseX,50);
  circle(mouseX,mouseY,50);
  circle(mouseY+100,mouseX,50);
  circle(mouseX,mouseY+300,50);
  
}

function mousePressed() {
   background(119, 119, 119);
  circle(mouseY,500 - mouseY,50);
  circle(mouseY,mouseX,50);
  circle(mouseX,mouseY,50);
  circle(mouseY+100,mouseX,50);
  circle(mouseX,mouseY+300,50);
}