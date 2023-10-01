import { BUY_MILK } from "./milkTypes";

const initialState = {
  numOfMilk: 10,
};
function milkReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_MILK:
      return {
        ...state,
        numOfMilk: state.numOfMilk - (action.payload ? action.payload : 1),
      };
    default:
      return state;
  }
}

export default milkReducer;
