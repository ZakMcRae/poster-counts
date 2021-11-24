import { configureStore } from "@reduxjs/toolkit";
import settledStatusReducer from "./settledStatus";

export default configureStore({
  reducer: {
    settlement: settledStatusReducer,
  },
});
