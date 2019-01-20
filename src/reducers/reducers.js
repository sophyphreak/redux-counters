const ADD_COUNTER = 'ADD_COUNTER';
const REMOVE_COUNTER = 'REMOVE_COUNTER';
const ADD_ONE = 'ADD_ONE';
const MINUS_ONE = 'MINUS_ONE';

const counterListDefaultState = [0];

export default (state = counterListDefaultState, action) => {
  switch (action.type) {
    case ADD_COUNTER: {
      return [...state, 0];
    }
    case REMOVE_COUNTER: {
      const newState = [...state];
      newState.pop();
      return newState;
    }
    case ADD_ONE: {
      const newState = [...state];
      newState[action.index]++;
      return newState;
    }
    case MINUS_ONE: {
      const newState = [...state];
      newState[action.index]--;
      return newState;
    }
    default: {
      return state;
    }
  }
};
