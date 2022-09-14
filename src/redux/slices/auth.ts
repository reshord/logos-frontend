import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValues } from "../../types/types";
import {authLogin, authRegister, logout} from '../../axios'


type AuthType = {
    isAuth: boolean
    data: null | FieldValues
    status: string
}

const initialState: AuthType = {
    isAuth: false,
    data: null,
    status: ''
}

const Auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: {

                /* Login */
        [authLogin.pending.toString()]: (state) => {
            state.isAuth = false
            state.status = 'Загрузка'
        },
        [authLogin.fulfilled.toString()]: (state, action: PayloadAction<FieldValues>) => {
            state.isAuth = true
            state.data = action.payload
            state.status = 'success'
        },
        [authLogin.rejected.toString()]: (state) => {
            state.status = 'error'
        },

                /* Register */
        [authRegister.pending.toString()]: (state) => {
            state.status = 'Загрузка'
        },
        [authRegister.fulfilled.toString()]: (state, action: PayloadAction<FieldValues>) => {
            state.data = action.payload
            state.status = 'success'
        },
        [authRegister.rejected.toString()]: (state) => {
            state.status = 'error'
        },
        /* Logout */
        [logout.pending.toString()]: (state) => {
            state.status = 'Загрузка'
        },
        [logout.fulfilled.toString()]: (state) => {
            state.status = 'success'
            state.data = null
            state.isAuth = false
        },
        [logout.rejected.toString()]: (state) => {
            state.status = 'error'
        }
    }
})

export default Auth.reducer