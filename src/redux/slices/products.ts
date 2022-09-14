import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInfo } from "../../types/types";
import {orderProd} from '../../types/types'

type initialStateType = {
    productsCart: CardInfo[]
    isLoading: boolean
    cartOpen: boolean
    prodInCart: boolean
    prodId: null
    message: null | string
    prodAdvice: CardInfo[]
}
type prodChange = {
    payload: {
        id: number
        totalCount: number
    }
}

const initialState: initialStateType = {
    productsCart: [],
    isLoading: true,
    cartOpen: false,
    prodInCart: false,
    prodId: null,
    message: null,
    prodAdvice: []
}

const addProdToCart = createSlice({
    name: 'addProdToCart',
    initialState,
    reducers: {
        /* Add prod */
        pushArr: (state, action: PayloadAction<CardInfo | orderProd>) => {
                const prodInCart = state.productsCart.find(el => el.id === action.payload.id)
                if(!prodInCart) {
                    state.productsCart.push(action.payload)
                }   
                else {
                    prodInCart.count = prodInCart.count + 1
                }
        },
        /* Delete prod */
        deleteProdCart: (state, action: PayloadAction<number>) => {
            state.productsCart = state.productsCart.filter(el => action.payload !== el.id)
            state.prodInCart = false
        },
        /* Delete prod */
        cartModal: (state, action) => {
            state.cartOpen = action.payload
        },
        /* Check Prod */
        productInCart: (state, action) => {
            if(state.productsCart.filter(el => el.id === action.payload)) {
                state.prodInCart = true
                state.prodId = action.payload
            }
        },
        /* Update Prod */
        updatePriceProd: (state, action) => {
            state.productsCart.map(el => {
                if(action.payload.id === el.id) {
                    el.count = action.payload.totalCount
                }
            })
        },
        cartProdAdvice: (state, action: PayloadAction<CardInfo[]>) => {
            state.prodAdvice = action.payload
        }
    }
})

export const { pushArr, 
              deleteProdCart, 
              cartModal, 
              productInCart, 
              updatePriceProd, 
              cartProdAdvice } = addProdToCart.actions

export default addProdToCart.reducer