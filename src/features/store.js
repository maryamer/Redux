// import { applyMiddleware, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import rootReducer from "./rootReducer";

import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cake/cakeSlice";
import milkReducer from "./milk/milkSlice";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// export default store;

const store = configureStore({
  reducer: { cake: cakeReducer, milk: milkReducer },
});
export default store;
