import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChampagne = createAsyncThunk('champagne/fetchChampagne', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/champagne')
    .then((response)=>{return response.data.champagne});
});

const slice = createSlice({
    name: 'champagne',
    initialState: {
        loading: false,
        champagne: [],
        error: ''
    },
    reducers: {
        clearChampgane: (state)=>{
            state.loading = false
            state.error = ''
            state.champagne = []
        }
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchChampagne.pending, (state)=>{
            state.loading = true
            state.champagne = []
            state.error = ''
        })

        builder.addCase(fetchChampagne.fulfilled, (state, action)=>{
            state.loading = false
            state.champagne = action.payload
            state.error = ''
        })

        builder.addCase(fetchChampagne.rejected, (state, action)=>{
            state.loading = false
            state.champagne = []
            state.error = action.error.message
        })
    }
})

export const { clearChampgane } = slice.actions;
export default slice.reducer;