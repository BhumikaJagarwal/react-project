import * as actionTypes from './action-type'

const initialState = { count: 0 }

export const reducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      }
    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }

    default: return state;

  }
}