import { configureStore } from "@reduxjs/toolkit";
import posterSliceReducer from "./poster";
import settledStatusReducer from "./settledStatus";

export default configureStore({
  reducer: {
    settlement: settledStatusReducer,
    poster: posterSliceReducer,
  },
});
