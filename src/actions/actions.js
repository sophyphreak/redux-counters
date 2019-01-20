const ADD_COUNTER = 'ADD_COUNTER';
const REMOVE_COUNTER = 'REMOVE_COUNTER';
const ADD_ONE = 'ADD_ONE';
const MINUS_ONE = 'MINUS_ONE';

export const addCounter = () => ({
  type: ADD_COUNTER
});

export const removeCounter = () => ({
  type: REMOVE_COUNTER
});

export const addOne = counterIndex => ({
  type: ADD_ONE,
  index: counterIndex
});

export const minusOne = counterIndex => ({
  type: MINUS_ONE,
  index: counterIndex
});
