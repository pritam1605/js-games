let foodPosition = {
  x: 10,
  y: 1
};

export function update() {}

export function draw(gameBoard) {
  const foodEl = document.createElement('div');
  foodEl.style.gridRowStart = foodPosition.y;
  foodEl.style.gridColumnStart = foodPosition.x;
  foodEl.className = 'food';

  gameBoard.appendChild(foodEl);
}