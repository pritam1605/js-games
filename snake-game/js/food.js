import {
  growSnake,
  isOnSnake
} from "./snake.js";

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
  let newPosition;

  while (!newPosition || isOnSnake(newPosition)) {
    newPosition = {
      x: Math.floor(Math.random() * 21 + 1),
      y: Math.floor(Math.random() * 21 + 1),
    };
  }

  return newPosition;
}