import { Rect, Circle, Triangle } from './Shapes.js';



function draw() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    let rect = new Rect(context, 50, 50);
    let circle = new Circle(context, 200, 50)
    let tria = new Triangle(context, 300, 100);
    rect.fillStyle = 'rgba(200, 0, 0, 1)';
    rect.draw(150, 50);
    circle.fillStyle = 'rgba(150, 200, 3, 0.5';
    circle.draw(30, 30);

    tria.fillStyle = 'rgba(12, 231, 44, 0.8)'
    tria.draw(70);
    tria.moveTo(500, 50);
    tria.draw(70, 30);

}

draw()