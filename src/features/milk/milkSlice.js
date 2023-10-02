import { createSlice } from "@reduxjs/toolkit";

const milkSlice = createSlice({
  name: "milk",
  initialState: { numOfMilk: 10 },
  reducers: {
    buyMilk: function (state, action) {
      state.numOfMilk = state.numOfMilk - 1;
    },
  },
});
// action creators
export const { buyMilk } = milkSlice.actions;
// reducers
export default milkSlice.reducer;
