import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJuice = createAsyncThunk('juice/fetchJuice', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/juice')
    .then((response)=>{return response.data.juice})
});

const slice = createSlice({
    name: 'juice',
    initialState: {
        loading: false,
        juice: [],
        error: ''
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchJuice.pending, (state)=>{
            state.loading = true
            state.juice = []
            state.error = ''
        })

        builder.addCase(fetchJuice.fulfilled, (state, action)=>{
            state.loading = false
            state.juice = action.payload
            state.error = ''
        })

        builder.addCase(fetchJuice.rejected, (state, action)=>{
            state.loading = false
            state.juice = []
            state.error = action.error.message
        })

    }
})

export default slice.reducer;