import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInfo } from "../../types/types";
import {addProducts} from '../../axios'

type initialStateProducts = {
    products: Array<CardInfo>
    status: string
}

const initialState: initialStateProducts = {
    products: [],
    status: ''
}

const allProducts = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        
    },
    extraReducers: {
        [addProducts.pending.toString()]: (state: initialStateProducts) => {
            state.status = 'Loading'
        },
        [addProducts.fulfilled.toString()]: (state: initialStateProducts, action: PayloadAction<CardInfo[]>) => {
            state.status = 'Fullfieled'
            state.products = action.payload
        },
        [addProducts.rejected.toString()]: (state: initialStateProducts) => {
            state.status = 'error404'
        }
    }
})


export default allProducts.reducer