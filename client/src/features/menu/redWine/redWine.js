import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchRedWine = createAsyncThunk('redWine/fechRedWine', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/red-wine')
    .then((response)=>{return response.data.redWine});
});

const slice = createSlice({
    name: 'redWine',
    initialState: {
        loading: false,
        redWine: [],
        error: ''
    },
    reducers: {
        clearRedWine: (state)=>{
            state.loading = false
            state.error = ''
            state.redWine = []
        }
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchRedWine.pending, (state)=>{
            state.loading = true
            state.redWine = []
            state.error = ''
        })

        builder.addCase(fetchRedWine.fulfilled, (state, action)=>{
            state.loading = false
            state.redWine = action.payload
            state.error = ''
        })

        builder.addCase(fetchRedWine.rejected, (state, action)=>{
            state.loading = false
            state.redWine = []
            state.error = action.error.message
        })

    }
});

export const { clearRedWine } = slice.actions;
export default slice.reducer;