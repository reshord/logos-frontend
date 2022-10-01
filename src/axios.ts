import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardInfo, FieldValues, LogoutType, ReviewsTypes } from "./types/types";
import { useAppDispatch } from "./redux/hooks";
import { activeAdaptiveModal } from "./redux/slices/activeModals";

    
const instance = axios.create({
    baseURL: 'https://cafeee-logos.herokuapp.com/'
})

instance.interceptors.request.use((config) => {
    config.headers = {"hello": "hello"}
})

export const addProducts = createAsyncThunk('addProd', async () => {
    try {
        return await axios.get<CardInfo[]>('https://cafeee-logos.herokuapp.com/').then(res => res.data)
    }catch (e) {
        console.error(e);
    }
})
export const authLogin = createAsyncThunk('authLogin', async ({email, password}: FieldValues) => {
    const token = window.localStorage.getItem('token')
    try {
        const {data} = await axios.post<FieldValues>('https://cafeee-logos.herokuapp.com/auth/login', {
            email,
            password
        }, {
            headers: {
                'Authorization': `${token}`
            }
        })
        return data
    }catch (e) {
        console.error(e);
    }
})
export const authRegister = createAsyncThunk('authRegister', async ({email, password, confirmPassword}: FieldValues) => {
    try {
        const {data} = await axios.post<FieldValues>('https://cafeee-logos.herokuapp.com/auth/register', {
            email,
            password,
            confirmPassword
        })
        return data
    }catch (e) {
        console.error(e);
    }
})

export const logout = createAsyncThunk('logout', async ({email}: any) => {
    try {
        const {data} = await axios.post('https://cafeee-logos.herokuapp.com/auth/logout', {
            email
        })

        return data

    }catch(e) {
        console.log(e);
    }
})

export const getComments = createAsyncThunk('comment', async ({id}: any) => {
    try {
        
        
        const {data} = await axios.get<ReviewsTypes[]>(`https://jsonplaceholder.typicode.com/post/${id}/comments`).then(res => res)

        return data  
           
         
    }catch(e) {
        console.log(e);
    }
})

