import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardInfo, orderProd } from "../../types/types";

interface initialStateType {
    productsCart: CardInfo[]
    isLoading: boolean
    cartOpen: boolean
    prodInCart: number[]
    prodId: null
    message: null | string
    prodAdvice: CardInfo[]
}

const initialState: initialStateType = {
    productsCart: [],
    isLoading: true,
    cartOpen: false,
    prodInCart: [],
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
                !prodInCart 
                    ? state.productsCart.push(action.payload)
                    : prodInCart.count = prodInCart.count + 1
                
        },
        /* Delete prod */
        deleteProdCart: (state, action: PayloadAction<number>) => {
            state.productsCart = state.productsCart.filter(el => action.payload !== el.id)
            state.prodInCart = state.prodInCart.filter(el => action.payload !== el)
        },
        /* Delete prod */
        cartModal: (state, action) => {
            state.cartOpen = action.payload
        },
        /* Check Prod */
        productInCart: (state, action) => {
                state.prodInCart.push(action.payload)
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