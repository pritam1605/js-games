import { growSnake, isOnSnake } from "./snake.js";

let foodPosition = placeFoodAtRandomPosition();

export function update() {
  if (isOnSnake(foodPosition)) {
    growSnake();
    foodPosition = placeFoodAtRandomPosition();
  }
}

export function draw(gameBoard) {
  const foodEl = document.createElement("div");
  foodEl.style.gridRowStart = foodPosition.y;
  foodEl.style.gridColumnStart = foodPosition.x;
  foodEl.className = "food";

  gameBoard.appendChild(foodEl);
}

function placeFoodAtRandomPosition() {
  let newPosition = {
    x: 1,
    y: 1,
  };
  let rowPos;
  let colPos;

  do {
    rowPos = Math.floor(Math.random() * 21 + 1);
    colPos = Math.floor(Math.random() * 21 + 1);
    newPosition = {
      x: colPos,
      y: rowPos,
    };
  } while (
    isOnSnake(newPosition) &&
    foodPosition.x === colPos &&
    foodPosition.y === rowPos
  );

  return newPosition;
}
