import {
  newPositionOfSnake
} from "./input.js";

export const SNAKE_SPEED_PER_SECOND = 5;
const SNAKE_GROWTH_SIZE = 1;
const GRID_SIZE = 21;

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
  if (isSnakeDead()) {
    if (!confirm("Play Again?")) {
      return;
    }
  }
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
    (part) => position.x === part.x && position.y === part.y
  );
}

export function growSnake() {

  let count = 0;
  while (count < SNAKE_GROWTH_SIZE) {
    snakeBody.push(snakeBody[snakeBody.length - 1]);
    count++;
  }
}

function isSnakeDead() {
  return snakeBody[0].y === 0 || snakeBody[0].y === 21 || snakeBody[0].x === 0 || snakeBody[0].x === 21;
}