import { Rect, Circle, Triangle } from './Shapes.js';

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
    let rect = new Rect(context, 50, 50);
    let circle = new Circle(context, 200, 50)
    let tria = new Triangle(context, 300, 100);
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