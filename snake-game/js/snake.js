import {
  newPositionOfSnake
} from './input.js';

export const SNAKE_SPEED_PER_SECOND = 2;
const snakeBody = [{
    x: 10,
    y: 11
  },
  {
    x: 11,
    y: 11
  }, {
    x: 12,
    y: 11
  },
  {
    x: 13,
    y: 11
  }, {
    x: 14,
    y: 11
  }
];

export function draw(gameBoard) {

  snakeBody.forEach(seg => {
    const snakeEl = document.createElement('div');
    snakeEl.style.gridRowStart = seg.y;
    snakeEl.style.gridColumnStart = seg.x;
    snakeEl.className = 'snake';

    gameBoard.appendChild(snakeEl);
  });

}
export function update() {
  const position = newPositionOfSnake();
  console.log(position);

  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = {
      ...snakeBody[i - 1]
    };
  }

  snakeBody[0].x += position.x;
  snakeBody[0].y += position.y;
}