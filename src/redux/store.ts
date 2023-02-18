import { configureStore } from "@reduxjs/toolkit";
import addProdToCart from "./slices/productsCart";
import auth from "./slices/auth";
import allProducts from "./slices/allProducts";
import comments from "./slices/addComment";
import activeModals from "./slices/activeModals";

const store = configureStore({
    reducer: {
        addProdToCart,
        auth,
        allProducts,
        comments,
        activeModals
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch