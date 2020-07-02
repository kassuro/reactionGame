import { Rectangle, Circle, Triangle } from './shapes';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;

function getRandomNumber(max, min = 1) {
  return Math.floor(Math.random() * max + min);
}

function randPosition() {
  const x = getRandomNumber(CANVAS_WIDTH - 100, 0);
  const y = getRandomNumber(CANVAS_HEIGHT - 100, 0);

  return { x, y };
}

function randColor() {
  const red = getRandomNumber(256, 0);
  const green = getRandomNumber(256, 0);
  const blue = getRandomNumber(256, 0);
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
