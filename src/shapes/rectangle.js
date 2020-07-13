import Shape from './shape';

class Rectangle extends Shape {
  draw(a, b) {
    this.x2 = this.x + a;
    this.y2 = this.y + b;
    this.path.moveTo(this.x, this.y);
    this.path.rect(this.x, this.y, a, b);
    super.draw();
  }
}

export default Rectangle;
