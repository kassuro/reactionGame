import { Rectangle, Circle, Triangle } from './shapes';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

function randPosition() {
  const x = Math.floor(Math.random() * (CANVAS_WIDTH - 100));
  const y = Math.floor(Math.random() * (CANVAS_HEIGHT - 100));

  return { x, y };
}

function randColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const alpha = Math.random() + 0.3;

  return `rgba(${red},${green},${blue},${alpha})`;
}

function draw() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');
  const posRect = randPosition();
  const rect = new Rectangle(context, posRect.x, posRect.y);
  const postCircle = randPosition();
  const circle = new Circle(context, postCircle.x, postCircle.y);
  const postTria = randPosition();
  const tria = new Triangle(context, postTria.x, postTria.y);
  rect.fillStyle = randColor();
  rect.draw(150, 50);
  circle.fillStyle = randColor();
  circle.draw(30, 30);

  tria.fillStyle = randColor();
  tria.draw(70);
  tria.moveTo(500, 50);
  tria.draw(70, 30);
}

document.addEventListener('DOMContentLoaded', () => {
  draw();
});
