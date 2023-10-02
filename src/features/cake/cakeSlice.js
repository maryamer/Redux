import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: { numOfCakes: 10 },
  reducers: {
    buyCake: function (state, action) {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
  },
});
// action creators
export const { buyCake } = cakeSlice.actions;
// reducers
export default cakeSlice.reducer;
