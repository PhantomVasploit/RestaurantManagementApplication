import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchLifeStyle = createAsyncThunk('lifeStyle/fetchLifeStyle', ()=>{
    return axios
    .get('http://127.0.0.1:5003/api/menu/life-style')
    .then((response)=>{return response.data.lifeStyle})
});

const slice = createSlice({
    name: 'lifeStyle',
    initialState: {
        loading: false,
        lifeStyle: [],
        error: ''
    },
    reducers: {
        clearLifeStyle: (state)=>{
            state.loading = false
            state.error = ''
            state.lifeStyle = []
        }
    },
    extraReducers: (builder)=>{

        builder.addCase(fetchLifeStyle.pending, (state)=>{
            state.loading = true
            state.lifeStyle = []
            state.error = ''
        })

        builder.addCase(fetchLifeStyle.fulfilled, (state, action)=>{
            state.loading = false
            state.lifeStyle = action.payload
            state.error = ''
        })

        builder.addCase(fetchLifeStyle.rejected, (state, action)=>{
            state.loading = false
            state.lifeStyle = []
            state.error = action.error.message
        })

    }
});

export const { clearLifeStyle } = slice.actions
export default slice.reducer;