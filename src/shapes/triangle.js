import Shape from './shape';

class Triangle extends Shape {
  draw(site, height = site) {
    this.path.moveTo(this.x, this.y);
    this.path.lineTo(this.x + site, this.y);
    this.path.lineTo(this.x + (site / 2), this.y - height);
    this.path.closePath();
    super.draw();
  }
}

export default Triangle;
