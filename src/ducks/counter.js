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

export const redo = () => {
    return {type: REDO}
}

export const undo = () => {
    return {type: UNDO}
}

let initialState = {
  currentValue: 0,
  previousValues: [],
  futureValues: []
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT: {
      return {
        currentValue: state.currentValue + action.amount,
        previousValues: [state.currentValue, ...state.previousValues],
        futureValues: []
      };
    }

    case DECREMENT: {
      return {
        currentValue: state.currentValue - action.amount,
        previousValues: [state.currentValue, ...state.previousValues],
        futureValues: []
      };
    }

    case REDO: {
        return{
            currentValue: state.futureValues[0],
            futureValues: state.futureValues.slice(1),
            previousValues: [state.currentValue, ...state.previousValues]
        }
    }

    case UNDO: {
        return{
            futureValues: [state.currentValue, ...state.futureValues],
            currentValue: state.previousValues[0],
            previousValues: state.previousValues.slice(1)
            
        }
    }

    default:
      return state;
  }
}

// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = true;
