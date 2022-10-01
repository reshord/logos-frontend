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
        filterCardsPopular: (state) => {
            state.products = [...state.products.sort((a, b) => a.popular - b.popular)]
        },
        filterCardsPriceLess: (state) => {
            state.products = [...state.products.sort((a, b) => a.price - b.price)]
        },
        filterCardsPriceMore: (state) => {
            state.products = [...state.products.sort((a, b) => b.price - a.price)]
        }
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

export const { filterCardsPopular, filterCardsPriceLess,  filterCardsPriceMore} = allProducts.actions


export default allProducts.reducer