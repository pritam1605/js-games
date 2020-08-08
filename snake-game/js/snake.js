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
  const position = newPositionOfSnake();

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = {
      ...snakeBody[i - 1],
    };
  }

  snakeBody[0].x += position.x;
  snakeBody[0].y += position.y;
}

export function isOnSnake(position, ignoreHead = false) {
  return snakeBody.some(
    (part, index) => {
      console.log(ignoreHead);
      console.log(index);
      if (ignoreHead && index === 0) {
        // console.log('I ma here');
        return false;
      } else {
        // console.log('I ate');
      }
      return position.x === part.x && position.y === part.y;
    }
  );
}

export function growSnake() {
  let count = 0;
  while (count < SNAKE_GROWTH_SIZE) {
    snakeBody.push(snakeBody[snakeBody.length - 1]);
    count++;
  }
}

export function isSnakeDead() {
  return isSnakeOutsideGrid();
  //  || snakeAteItself();
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
  return isOnSnake(snakeBody[0], true);
}

export function blinkSnake(snakeSegments) {
  snakeSegments.forEach(snakeSeg => {
    snakeSeg.classList.add('blink');
  });
}