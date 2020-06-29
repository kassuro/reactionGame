import { Rect, Circle, Triangle } from './Shapes.js';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

function randPosition() {
    const x = Math.floor(Math.random() * (CANVAS_WIDTH - 100));
    const y = Math.floor(Math.random() * (CANVAS_HEIGHT - 100));

    return { x, y };
}

function randColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const alpha = Math.random() + 0.3;

    return `rgba(${red},${green},${blue},${alpha})`
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
    rect.fillStyle = randColor();
    rect.draw(150, 50);
    circle.fillStyle = randColor();
    circle.draw(30, 30);

    tria.fillStyle = randColor()
    tria.draw(70);
    tria.moveTo(500, 50);
    tria.draw(70, 30);

}

document.addEventListener('DOMContentLoaded', (e) => {
    draw()
})