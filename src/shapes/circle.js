import Shape from './shape';

class Circle extends Shape {
  draw(xRadius, yRadius) {
    this.path.ellipse(this.x, this.y, xRadius, yRadius, 0, 0, 2 * Math.PI);
    super.draw();
  }
}

export default Circle;
