let ball, ball1, ball2;



function setup() {
  createCanvas(600, 400);
  
  ball = new Ball(200, 200, 1, 1, 20, 255, 0, 0);
  ball1 = new Ball(300, 400, 1, 1, 20, 0, 0, 255);
  ball2 = new Ball(500, 100, 1, 1, 20, 0, 255, 0);
}

function draw() {
  background("white");
  ball.bounce();
  ball1.bounce();
  ball2.bounce();

}