import { configureStore } from "@reduxjs/toolkit";
import addProdToCart from "./slices/products";
import auth from "./slices/auth";
import allProducts from "./slices/allProducts";
import comments from "./slices/addComment";

const store = configureStore({
    reducer: {
        addProdToCart,
        auth,
        allProducts,
        comments
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch