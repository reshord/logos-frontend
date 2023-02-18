import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { getComments } from "../../axios";
import { ReviewsTypes } from "../../types/types";

type initialStateType = {
    AllComments: ReviewsTypes[] | null
    success: boolean 
    // name: string
}

const initialState: initialStateType = {
    AllComments: [],
    success: false,
    // name: ''
}

const comments = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addCommentToList: (state, {payload}) => {
            // const data = {
            //     payload
            // }
            state.AllComments?.push(payload)
        }
    },
    extraReducers: {
        // [getComments.pending.toString()]: (state) => {
        //     state.success = false
        //     state.AllComments = []
        // },
        // [getComments.fulfilled.toString()]: (state, {payload}) => {
        //     state.success = true
        //     state.AllComments = payload
        // },
        // [getComments.rejected.toString()]: (state) => {
        //     state.success = false
        // }
    }
})

export const {addCommentToList} = comments.actions

export default comments.reducer