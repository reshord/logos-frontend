import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FieldValues } from "../../types/types";
// import {authLogin, authRegister, logout} from '../../axios'


type AuthType = {
    isAuth: boolean
    data: null | FieldValues
    status: string
    register: boolean
    login: boolean
    logout: boolean
    type: string

}

const initialState: AuthType = {
    isAuth: false,
    data: null,
    status: '',
    register: false,
    login: false,
    logout: false,
    type: ''
}

const Auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: {

                /* Login */
        // [authLogin.pending.toString()]: (state) => {
        //     state.isAuth = false
        //     state.status = 'Загрузка'
        // },
        // [authLogin.fulfilled.toString()]: (state, action: PayloadAction<FieldValues>) => {
        //     state.isAuth = true
        //     state.data = action.payload
        //     state.register = false
        //     state.logout = false
        //     state.login = true
        //     state.status = 'success'
        //     state.type = 'LOGIN'
        // },
        // [authLogin.rejected.toString()]: (state) => {
        //     state.status = 'error'
        //     state.isAuth = false
        //     state.login = false
        // },

        //         /* Register */
        // [authRegister.pending.toString()]: (state) => {
        //     state.status = 'Загрузка'
        // },
        // [authRegister.fulfilled.toString()]: (state, action: PayloadAction<FieldValues>) => {
        //     state.data = action.payload
        //     state.status = 'success'
        //     state.register = true
        //     state.logout = false
        //     state.type = 'REGISTRATION'

        // },
        // [authRegister.rejected.toString()]: (state) => {
        //     state.status = 'error'
        //     state.isAuth = false
        //     state.register = false
        // },
        // /* Logout */
        // [logout.pending.toString()]: (state) => {
        //     state.status = 'Загрузка'
        // },
        // [logout.fulfilled.toString()]: (state) => {
        //     state.status = 'success'
        //     state.data = null
        //     state.isAuth = false
        //     state.logout = true
        //     state.login = false
        //     state.register = false
        //     state.type = 'LOGOUT'

        // },
        // [logout.rejected.toString()]: (state) => {
        //     state.status = 'error'
        //     state.isAuth = false
        //     state.logout = false
        // }
    }
})

export default Auth.reducer