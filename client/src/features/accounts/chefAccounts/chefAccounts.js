import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChefAccounts = createAsyncThunk('chefAccounts/fetchChefAccounts', ()=>{
    return axios
    .get('http://127.0.0.1:5002/api/chef/accounts')
    .then((response)=>{ return response.data.chefs })
})

const slice = createSlice({
    name: 'chefAccounts',
    initialState: {
        loading: false,
        chefAccounts: [],
        error: '' 
    },
    reducers: {
        clearChefAccounts: (state)=>{
            state.loading = false
            state.chefAccounts = []
            state.error = ''
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchChefAccounts.pending, (state)=>{
            state.loading = true
            state.chefAccounts = []
            state.error = ''
        })
        builder.addCase(fetchChefAccounts.fulfilled, (state, action)=>{
            state.loading = false
            state.chefAccounts = action.payload
            state.error = ''
        })
        builder.addCase(fetchChefAccounts.rejected, (state, action)=>{
            state.loading = false
            state.chefAccounts = []
            state.error = action.error.message
        })
    }
})

export const { clearChefAccounts } = slice.actions
export default slice.reducer