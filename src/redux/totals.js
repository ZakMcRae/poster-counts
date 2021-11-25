import { createSlice } from "@reduxjs/toolkit";

export const totalsSlice = createSlice({
  name: "totals",
  initialState: { totalIn: 0, comp: 0, countOut: 0, totalSold: 0, gross: 0 },
  reducers: {
    setTotals: (state, action) => {
      const { totalIn, comp, countOut, totalSold, gross } = action.payload;
      state.totalIn = totalIn;
      state.comp = comp;
      state.countOut = countOut;
      state.totalSold = totalSold;
      state.gross = gross;
    },
  },
});

export const { setTotals } = totalsSlice.actions;

export default totalsSlice.reducer;
