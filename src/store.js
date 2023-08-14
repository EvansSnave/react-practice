import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './reduxSlices';

export const store = configureStore({
  reducer: {
    slicePractice: sliceReducer,
  },
});