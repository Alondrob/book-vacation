import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/misc-slices/searchSlice";
import propertyReducer from "../redux/slices/propertySlice";
import userReducer from "../redux/slices/userSlice";
export const store = configureStore({
  reducer: {
    search: searchReducer,
    property: propertyReducer,
    user: userReducer,
  },
});
