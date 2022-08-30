import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/misc-slices/searchSlice';

export const store = configureStore({
    reducer: {
      search: searchReducer,
  },
});
