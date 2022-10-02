import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiRoutes } from "../routes/routes";
import axios from "axios";

export const getAllProperties = createAsyncThunk(
  "property/getAllProperties",
  async () => {
    const response = await axios.get(apiRoutes.property.getAllProperties());
    console.log("response-slice", response.data);
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
    let userData = localStorage.getItem('user')
    console.log("data", propertyData);
    const response = await axios.post(
      apiRoutes.property.createPropertyRoute(),
      propertyData,
      {
        headers: {
          'Authorization': 'Bearer' + '' + userData.token
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
