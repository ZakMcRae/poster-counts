import { configureStore } from "@reduxjs/toolkit";
import posterSliceReducer from "./slices/poster";
import settledStatusReducer from "./slices/settledStatus";
import totalsSliceReducer from "./slices/totals";

export default configureStore({
  reducer: {
    settlement: settledStatusReducer,
    poster: posterSliceReducer,
    totals: totalsSliceReducer,
  },
});
