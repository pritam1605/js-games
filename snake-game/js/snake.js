import {
  newPositionOfSnake
} from "./input.js";

export const SNAKE_SPEED_PER_SECOND = 8;
export const GRID_SIZE = 21;
const SNAKE_GROWTH_SIZE = 1;

const snakeBody = [{
  x: 10,
  y: 11,
}, ];

export function draw(gameBoard) {
  snakeBody.forEach((seg) => {
    const snakeEl = document.createElement("div");
    snakeEl.style.gridRowStart = seg.y;
    snakeEl.style.gridColumnStart = seg.x;
    snakeEl.className = "snake";

    gameBoard.appendChild(snakeEl);
  });
}

export function update() {
  const position = newPositionOfSnake();

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = {
      ...snakeBody[i - 1],
    };
  }

  snakeBody[0].x += position.x;
  snakeBody[0].y += position.y;
}

export function isOnSnake(position) {
  return snakeBody.some(
    (part) =>
    position.x === part.x && position.y === part.y
  );
}

export function growSnake() {
  let count = 0;
  while (count < SNAKE_GROWTH_SIZE) {
    snakeBody.push({
      ...snakeBody[snakeBody.length - 1]
    });
    count++;
  }
}

export function isSnakeDead() {
  return isSnakeOutsideGrid() ||
    snakeAteItself();
}

function isSnakeOutsideGrid() {
  return (
    snakeBody[0].y < 1 ||
    snakeBody[0].y > GRID_SIZE ||
    snakeBody[0].x < 1 ||
    snakeBody[0].x > GRID_SIZE
  );
}

function snakeAteItself() {
  let check = false;
  if (snakeBody.length <= 2) return false;
  for (let i = 1; i < snakeBody.length; i++) {
    if (snakeBody[0].x === snakeBody[i].x && snakeBody[0].y === snakeBody[i].y) {
      check = true;
      break;
    }
  }

  return check;
}

export function blinkSnake(snakeSegments) {
  snakeSegments.forEach(snakeSeg => {
    snakeSeg.classList.add('blink');
  });
}