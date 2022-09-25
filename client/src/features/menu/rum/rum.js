import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRum = createAsyncThunk('rum/fetchRum', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/rum')
    .then((response)=>{return response.data.rum});
});

const slice =  createSlice({
    name: 'rum',
    initialState: {
        loading: false,
        rum: [],
        error: ''
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchRum.pending, (state)=>{
            state.loading = true
            state.rum = []
            state.error = ''
        })

        builder.addCase(fetchRum.fulfilled, (state, action)=>{
            state.loading = false
            state.rum = action.payload
            state.error = ''
        })

        builder.addCase(fetchRum.rejected, (state, action)=>{
            state.loading = false
            state.rum = []
            state.error = action.error.message
        })

    }
});

export default slice.reducer;