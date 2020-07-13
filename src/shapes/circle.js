import Shape from './shape';

class Circle extends Shape {
  draw(xRadius, yRadius) {
    this.xRadius = xRadius;
    this.yRadius = yRadius;
    this.path.ellipse(this.x, this.y, xRadius, yRadius, 0, 0, 2 * Math.PI);
    super.draw();
  }

  clickedOnShape(x, y) {
    const xPart = ((x - this.x) ** 2) / this.xRadius ** 2;
    const yPart = ((y - this.y) ** 2) / this.yRadius ** 2;

    return xPart + yPart <= 1;
  }
}

export default Circle;
