import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    addByValue: (state, action) => {
      state.value += Number(action.payload);
    },
    divideByValue: (state, action) => {
      state.value /= Number(action.payload);
    },
  },
});

export const { increment, decrement, addByValue, divideByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
