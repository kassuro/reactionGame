import { Rectangle, Circle, Triangle } from './shapes';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 400;
const SHAPES = [Rectangle, Circle, Triangle];

let CANVAS;
let CONTEXT;
let SHAPE_CORDINATES;

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
  CONTEXT.fillStyle = '#FFF';
  CONTEXT.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  const position = randPosition();
  const shapeWidth = getRandomNumber(100, 10);
  const shapeHeight = getRandomNumber(100, 10);
  const ShapeConstructor = SHAPES[getRandomNumber(3, 0)];
  const shape = new ShapeConstructor(CONTEXT, position.x, position.y);
  shape.fillStyle = randColor();
  shape.draw(shapeWidth, shapeHeight);
  SHAPE_CORDINATES = {
    x: position.x + CANVAS.offsetLeft,
    y: position.y + CANVAS.offsetTop,
    x2: position.x + shapeWidth + CANVAS.offsetLeft,
    y2: position.y + shapeHeight + CANVAS.offsetTop,
  };
}

function startGame() {
  let gameRunning = true;
  let score = 0;
  draw();
  CANVAS.addEventListener('click', (event) => {
    const { x, y } = event;
    const validXCordinate = x >= SHAPE_CORDINATES.x && x <= SHAPE_CORDINATES.x2;
    const validYCordinate = y >= SHAPE_CORDINATES.y && y <= SHAPE_CORDINATES.y2;

    if (validXCordinate && validYCordinate) {
      score += 1;
      console.log(score);
      draw();
    }
  });

  setTimeout(() => {
    gameRunning = false;
  }, 6000);
}

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('startBtn');
  CANVAS = document.getElementById('canvas');
  CONTEXT = CANVAS.getContext('2d');

  startButton.addEventListener('click', startGame);
});
