import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMineralWater = createAsyncThunk('mineralWater/fetchMineralWater', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/mineral-water')
    .then((response)=>{return response.data.mineralWater});
});

const slice = createSlice({
    name: 'mineralWater',
    initialState: {
        loading: false,
        mineralWater: [],
        error: ''
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchMineralWater.pending, (state)=>{
            state.loading = true
            state.mineralWater = []
            state.error = ''
        })

        builder.addCase(fetchMineralWater.fulfilled, (state, action)=>{
            state.loading = false
            state.mineralWater = action.payload
            state.error = ''
        })

        builder.addCase(fetchMineralWater.rejected, (state, action)=>{
            state.loading = false
            state.mineralWater = []
            state.error = action.error.message
        })

    }
})

export default slice.reducer;