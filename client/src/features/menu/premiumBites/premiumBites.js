import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPremiumBites = createAsyncThunk('premium/Bites', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/premium-bites')
    .then((response)=>{return response.data.premiumBites});
});

const slice = createSlice({
    name: 'premiumBites',
    initialState: {
        loading: false,
        premiumBites: [],
        error: ''
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchPremiumBites.pending, (state)=>{
            state.loading = true
            state.premiumBites = []
            state.error = ''
        })

        builder.addCase(fetchPremiumBites.fulfilled, (state, action)=>{
            state.loading =  false
            state.premiumBites = action.payload
            state.error = ''
        })

        builder.addCase(fetchPremiumBites.rejected, (state, action)=>{
            state.loading = false
            state.premiumBites = []
            state.error = action.error.message
        })

    }
});

export default slice.reducer;