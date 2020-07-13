class Shape {
  constructor(context, x, y) {
    this.context = context;
    this.x = x;
    this.y = y;
    this.path = new Path2D();
  }

  set fillStyle(style) {
    this.context.fillStyle = style;
  }

  get fillStyle() {
    return this.context.fillStyle;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  draw(stroke) {
    if (stroke) {
      this.context.stroke(this.path);
    } else {
      this.context.fill(this.path);
    }
  }

  clickedOnShape(x, y) {
    const validXCordinate = x >= this.x && x <= this.x2;
    const validYCordinate = y >= this.y && y <= this.y2;
    return validXCordinate && validYCordinate;
  }
}

export default Shape;
