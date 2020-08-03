  let newPosition = {
    x: 0,
    y: 0
  };

  let lastPosition = {
    x: 0,
    y: 0
  };

  window.addEventListener('keydown', e => {

    switch (e.key) {
      case 'ArrowUp':
        if (lastPosition.y === 1) {
          return;
        }

        newPosition = {
          x: 0,
          y: -1
        };
        break;
      case 'ArrowDown':
        if (lastPosition.y === -1) {
          return;
        }

        newPosition = {
          x: 0,
          y: 1
        };
        break;
      case 'ArrowLeft':
        if (lastPosition.x === 1) {
          return;
        }

        newPosition = {
          x: -1,
          y: 0
        };
        break;
      case 'ArrowRight':
        if (lastPosition.x === -1) {
          return;
        }

        newPosition = {
          x: 1,
          y: 0
        };
        break;
    }
  });

  export function newPositionOfSnake() {
    lastPosition = newPosition;
    return newPosition;
  }