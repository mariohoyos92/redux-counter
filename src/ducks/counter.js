const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const REDO = "REDO";
const UNDO = "UNDO";


export const increment = amount => {
  return { type: INCREMENT, amount: amount };
};

export const decrement = amount => {
  return { type: DECREMENT, amount: amount };
};

let initialState = {
  currentValue: 0
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        currentValue: state.currentValue + action.amount
      };
    }

    case DECREMENT: {
      return {
        currentValue: state.currentValue - action.amount
      };
    }

    default:
      return state;
  }
}

// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;
