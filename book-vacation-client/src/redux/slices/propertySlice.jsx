import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { allPropertiesRouteUrl } from "../routes/propertyRoutes";
import axios from "axios";
import { getPropertyById } from "../api-requests/propertyRequests";
import { apiRoutes } from "../../routes";

const initialState = {
  loading: false,
  properties: [],
  property: null,
  error: null,
};

export const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async () => {
    const response = await axios.get(apiRoutes.property.getAll());
    console.log("response-slice", response.data);
    return response.data;
  }
);

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProperties.pending]: (state) => {
      state.loading = true;
    },
    [getAllProperties.fulfilled]: (state, action) => {
      state.loading = false;
      state.properties = action.payload.properties;
    },
    [getAllProperties.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getPropertyById.pending]: (state) => {
      state.loading = true;
    },
    [getPropertyById.fulfilled]: (state, action) => {
      state.loading = false;
      state.property = action.payload.property;
    },
    [getPropertyById.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
});

export const selectProperties = (state) => {
  // console.log("state", state);
  return {
    ...state.property,
  };
};
export default propertySlice.reducer;
