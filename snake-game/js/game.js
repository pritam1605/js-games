import {
  draw as drawFood,
  update as updateFood
} from './food.js';
import {
  draw as drawSnake,
  SNAKE_SPEED_PER_SECOND,
  update as updateSnake
} from './snake.js';



let lastRenderTime = 0;
const gameBoard = document.querySelector('.game-board');

function main(currentTime) {
  const timeTakenToRender = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(main);

  if (1 / SNAKE_SPEED_PER_SECOND > timeTakenToRender) {
    return;
  }

  // console.log(timeTakenToRender);
  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawFood(gameBoard);
}