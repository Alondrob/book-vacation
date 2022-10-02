import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { apiRoutes } from "../routes/routes";

export const createNewUser = createAsyncThunk(
    "user/createNewUser",
    async (userData) => {
        const response = await axios.post(apiRoutes.user.createUserRoute(), userData);
        console.log("create-user-request", response.data);
      
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (userData) => {
        console.log("gittingthe request")
        const response = await axios.post(apiRoutes.user.loginUserRoute(), userData);
        console.log(response)
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
            return response.data
        }
    }
);



export const editUser = createAsyncThunk(
    "user/editUser",
    async (userData, { getState }) => {
        const state = getState();
        const token = state.token();
        const response = await axios.put(apiRoutes.user.createUserRoute(), userData, {
            headers: {
                "Authorazation": `Basic ${token}`
            }
        });
        console.log("create-user-request", response.data);
        return response.data;
    }
)
export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (useData) => {
        const response = await axios.delete(apiRoutes.user.createUserRoute());
        console.log("create-user-request", response.data);
        return response.data;
    }
)