import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from './reduxSlices';
import beerReducer from './beerSlice';

export const store = configureStore({
  reducer: {
    slicePractice: sliceReducer,
    beers: beerReducer,
  },
});