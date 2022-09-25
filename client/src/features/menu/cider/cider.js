import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCider = createAsyncThunk('cider/fetchCider', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/cider')
    .then((response)=>{return response.data.cider})
});

const slice = createSlice({
    name: 'cider',
    initialState: {
        loading: false,
        cider: [],
        error: ''
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchCider.pending, (state)=>{
            state.loading = true
            state.cider = []
            state.error = ''
        })

        builder.addCase(fetchCider.fulfilled, (state, action)=>{
            state.loading = false
            state.cider = action.payload
            state.error = ''
        })

        builder.addCase(fetchCider.rejected, (state, action)=>{
            state.loading = false
            state.cider = []
            state.error = action.error.message
        })
    }
});

export default slice.reducer;