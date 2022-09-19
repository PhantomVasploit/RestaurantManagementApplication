import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'errorMessage',
    initialState: {
        errorMessage: ''
    },
    reducers: {
        loadMessage: (state, action)=>{
            state.errorMessage = action.payload.data.message;
        },
        clearMessage: (state)=>{
            state.errorMessage = ''
        }
    }
})

export const { loadMessage, clearMessage } = slice.actions;
export default slice.reducer;