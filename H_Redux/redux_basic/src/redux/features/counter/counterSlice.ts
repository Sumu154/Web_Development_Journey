import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  count: 0,
}

// 3 ta jinish must provide korte hbe -> name, initialstate, reducer
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // egula ekekta action
    makeIncrement: (state, action) => {
      state.count += action.payload;
    },
    makeDecrement: (state, action) => {
      state.count -= action.payload;
    }
  },
})

export const { makeIncrement, makeDecrement } = counterSlice.actions;


export default counterSlice.reducer;
// counterSlice.reducer ke export korte hbe as counterReducer