export const COUNTER_MIN = 0;
export const COUNTER_MAX = 10;

const ACT_INC = 'ACTION_INCREMENT';
const ACT_DEC = 'ACTION_DECREMENT';

// Helper funcs
export function incrementCounter(cur) {
  if (cur < COUNTER_MAX) {
    return cur + 1;
  }

  return cur;
}

export function decrementCounter(cur) {
  if (cur > COUNTER_MIN) {
    return cur - 1;
  }

  return cur;
}

// Main reducer
export function Counter(state = { counter: 0 }, action) {
  switch (action.type) {
    case ACT_INC:
      return {
        ...state,
        counter: incrementCounter(state.counter),
      };
    case ACT_DEC:
      return {
        ...state,
        counter: decrementCounter(state.counter),
      };
    default:
      return state;
  }
}

// Export to components

export function increment() {
  return { type: ACT_INC };
}

export function decrement() {
  return { type: ACT_DEC };
}
