import { configureStore } from "@reduxjs/toolkit";
import posterSliceReducer from "./poster";
import settledStatusReducer from "./settledStatus";
import totalsSliceReducer from "./totals";

export default configureStore({
  reducer: {
    settlement: settledStatusReducer,
    poster: posterSliceReducer,
    totals: totalsSliceReducer,
  },
});
