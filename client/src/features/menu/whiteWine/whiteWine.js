import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchWhiteWine = createAsyncThunk('whiteWine/fetchWhiteWine', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/white-wine')
    .then((response)=>{return response.data.whiteWine});
});

const slice = createSlice({
    name: 'whiteWine',
    initialState: {
        loading: false,
        whiteWine: [],
        error: ''
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchWhiteWine.pending, (state)=>{
            state.loading = true
            state.whiteWine = []
            state.error = ''
        })

        builder.addCase(fetchWhiteWine.fulfilled, (state, action)=>{
            state.loading = false
            state.whiteWine = action.payload
            state.error = ''
        })

        builder.addCase(fetchWhiteWine.rejected, (state, action)=>{
            state.loading = false
            state.whiteWine = []
            state.error = action.error.message
        })

    }
});

export default slice.reducer;