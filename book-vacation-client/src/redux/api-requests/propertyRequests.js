import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoutes } from "../routes/routes";
import axios from "axios";

export const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async () => {
    const response = await axios.get(apiRoutes.property.getAllProperties());
    return response.data;
  }
);
export const getPropertyById = createAsyncThunk(
  "property/getPropertyById",
  async (id) => {
    // console.log("request-id", id);
    const response = await axios.get(apiRoutes.property.getPropertyById(id));
    //  console.log(response.data);
    return response.data;
  }
);

export const createNewProperty = createAsyncThunk(
  "property/createNewProperty",
  async (propertyData) => {
    const user =  JSON.parse(localStorage.getItem('user'));
    console.log("token", user.token);
    const response = await axios.post(
      apiRoutes.property.createPropertyRoute(),
      propertyData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      }
    );
    console.log("create-property-request", response.data);
    return response.data;
  }
);

export const bookProperty = createAsyncThunk(
  "property/bookProperty",
  async ( property) => {
    console.log( property)
    const response = await axios.post(
      apiRoutes.property.bookPropertyRoute( property)
    );
      console.log("booking -property", response.data);
    return response.data;
  }
);
