import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGin = createAsyncThunk('gin/fetchGin', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/gin')
    .then((respoonse)=>{return respoonse.data.gin})
});

const slice = createSlice({
    name: 'gin',
    initialState: {
        loading: false,
        gin: [],
        error: ''
    },
    extraReducers: (buillder)=>{

        buillder.addCase(fetchGin.pending, (state)=>{
            state.loading = true
            state.gin = []
            state.error = ''
        })

        buillder.addCase(fetchGin.fulfilled, (state, action)=>{
            state.loading = false
            state.gin = action.payload
            state.error = ''
        })

        buillder.addCase(fetchGin.rejected, (state, action)=>{
            state.loading = false
            state.gin = []
            state.error = action.error.message
        })

    }
});

export default slice.reducer;