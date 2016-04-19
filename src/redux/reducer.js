
// Main reducer
export const initialGame = {
  snakeHead: [0, 0],
  snake: [{ x: 0, y: 0 }, { x: 0, y: 1 }],
  fieldSize: 10,
};

export function Game(state = initialGame, action) {
  switch (action.type) {
    default:
      return state;
  }
}
