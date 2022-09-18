import { createAsyncThunk } from "@reduxjs/toolkit";
import { getPropertyUrl } from "../routes/propertyRoutes";
import {apiRoutes } from "../../routes";
import axios from "axios";



export const getPropertyById = createAsyncThunk(
    "property/getPropertyById", 
    async (id) => {
        // console.log("request-id", id);
        const response = await axios.get(apiRoutes.property.getPropertyById(id));
        //  console.log(response.data);
        return response.data;
       
    }
)