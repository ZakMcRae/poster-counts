import { createSlice } from "@reduxjs/toolkit";

export const settledStatusSlice = createSlice({
  name: "settlement",
  initialState: {
    settledStatus: false,
  },
  reducers: {
    setStatusTrue: (state) => {
      state.settledStatus = true;
    },
  },
});

export const { setStatusTrue } = settledStatusSlice.actions;

export default settledStatusSlice.reducer;
