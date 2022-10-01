import { createSlice } from "@reduxjs/toolkit";

export type initialStateType = {
    adaptiveModal: boolean
}

const initialState: initialStateType = {
        adaptiveModal: false
}

const activeModals = createSlice({
    name: 'activeModals',
    initialState,
    reducers: {
        activeAdaptiveModal: (state) => {
            state.adaptiveModal = !state.adaptiveModal
        }
    }
})

export const {activeAdaptiveModal} = activeModals.actions
export default activeModals.reducer
