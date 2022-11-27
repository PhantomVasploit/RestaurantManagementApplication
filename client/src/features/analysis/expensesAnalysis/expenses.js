import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', ()=>{
    return axios
    .get('http://127.0.0.1:5008/api/stock')
    .then((response)=>{return response.data.stock})
})

const slice = createSlice({
    name: 'expenses',
    initialState: {
        loading: false,
        stock: [],
        error: ''
    },
    reducers: {
        clearExpenses: (state)=>{
            state.loading = false
            state.error = ''
            state.stock = []
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchExpenses.pending, (state)=>{
            state.loading = true
            state.stock = []
            state.error = ''
        })
        builder.addCase(fetchExpenses.fulfilled, (state, action)=>{
            state.loading = false
            state.stock = action.payload
            state.error = ''
        })
        builder.addCase(fetchExpenses.rejected, (state, action)=>{
            state.loading = false
            state.stock = []
            state.error = action.error.message
        })
    }
})

export const { clearExpenses } = slice.actions
export default slice.reducer