import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardInfo, FieldValues, LogoutType } from "./types/types";

    
const instance = axios.create({
    baseURL: 'https://dashboard.heroku.com/apps/mern-restaurant-logos'
})

instance.interceptors.request.use((config) => {
    config.headers = {"hello": "hello"}
})

export const addProducts = createAsyncThunk('addProd', async () => {
    try {
        return await axios.get<CardInfo[]>('https://logos-cafe.herokuapp.com/').then(res => res.data)
    }catch (e) {
        console.error(e);
    }
})
export const authLogin = createAsyncThunk('authLogin', async ({email, password}: FieldValues) => {
    const token = window.localStorage.getItem('token')
    try {
        const {data} = await axios.post<FieldValues>('https://logos-cafe.herokuapp.com/auth/login', {
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
        const {data} = await axios.post<FieldValues>('https://logos-cafe.herokuapp.com//auth/register', {
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
        const {data} = await axios.post('https://logos-cafe.herokuapp.com//auth/logout', {
            email
        })

        return data

    }catch(e) {
        console.log(e);
    }
})