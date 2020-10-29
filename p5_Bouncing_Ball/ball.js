
class Ball {
  constructor(x, y, xs, ys, d, r, g, b) {
    this.x = x;
    this.y = y;
    this.xspeed = xs;
    this.yspeed = ys;
    this.d = d;
    this.r = r;
    this.g = g;
    this.b = b;
  }

  bounce() {

    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }

    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }

    circle(this.x, this.y, this.d);
    fill( this.r, this.g, this.b);
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

  }


}