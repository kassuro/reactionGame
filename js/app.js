import { Rect, Circle, Triangle } from './Shapes.js';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

function randPosition() {
    const x = Math.floor(Math.random() * (CANVAS_WIDTH - 100));
    const y = Math.floor(Math.random() * (CANVAS_HEIGHT - 100));

    return { x, y };
}

function draw() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    const posRect = randPosition();
    let rect = new Rect(context, posRect.x, posRect.y);
    const postCircle = randPosition()
    let circle = new Circle(context, postCircle.x, postCircle.y);
    const postTria = randPosition()
    let tria = new Triangle(context, postTria.x, postTria.y);
    rect.fillStyle = 'rgba(200, 0, 0, 1)';
    rect.draw(150, 50);
    circle.fillStyle = 'rgba(150, 200, 3, 0.5';
    circle.draw(30, 30);

    tria.fillStyle = 'rgba(12, 231, 44, 0.8)'
    tria.draw(70);
    tria.moveTo(500, 50);
    tria.draw(70, 30);

}

document.addEventListener('DOMContentLoaded', (e) => {
    draw()
})