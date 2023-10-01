const initialState = {
  numOfCakes: 10,
};
function cakeReducer(state = initialState, action) {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        numOfCakes: state.numOfCakes--,
      };
    default:
      return state;
  }
}

export default cakeReducer;
