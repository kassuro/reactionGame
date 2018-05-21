class Shape {
    constructor(context, x, y) {
        this.context = context;
        this.x = x;
        this. y = y;
        this.path = new Path2D();
    }
    
    set fillStyle(style) {
        this.context.fillStyle = style;
    }
    get  fillStyle() {
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
}

class Rect extends Shape {
    constructor(c, x, y) {
        super(c, x, y)
    }

    draw(a, b, stroke) {
        this.path.moveTo(this.x, this.y);
        this.path.rect(this.x, this.y, a, b);
        super.draw()
    }
}

class Circle extends Shape {
    constructor(c, x, y) {
        super(c, x, y);
    }

    draw(xRadius, yRadius, stroke) {
        this.path.ellipse(this.x, this.y, xRadius, yRadius, 0, 0, 2 * Math.PI);
        super.draw();
    }
}

class Triangle extends Shape {
    constructor(c, x, y) {
        super(c, x, y);
    }

    draw(site, height = site) {
        this.path.moveTo(this.x, this.y);
        this.path.lineTo(this.x + site, this.y);
        this.path.lineTo(this.x + (site / 2), this.y - height);
        this.path.closePath();
        super.draw();
    }
}

export {Rect, Circle, Triangle};