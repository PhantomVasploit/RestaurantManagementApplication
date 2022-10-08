import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCognac = createAsyncThunk('cognac/fetchCognac', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/cognac')
    .then((response)=>{return response.data.cognac})
});

const slice = createSlice({
    name: 'cognac',
    initialState: {
        loading: false,
        cognac: [],
        error: ''
    },
    reducers: {
        clearCognac: (state)=>{
            state.loading = false
            state.error = ''
            state.cognac = []
        }
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchCognac.pending, (state)=>{
            state.loading = true
            state.cognac = []
            state.error = ''
        })

        builder.addCase(fetchCognac.fulfilled, (state, action)=>{
            state.loading = false
            state.cognac = action.payload
            state.error = ''
        })

        builder.addCase(fetchCognac.rejected, (state, action)=>{
            state.loading = false
            state.cognac = []
            state.error = action.error.message
        })

    }
});

export const { clearCognac } = slice.actions;
export default slice.reducer;