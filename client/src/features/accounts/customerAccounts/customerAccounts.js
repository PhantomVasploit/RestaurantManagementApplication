import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCustomerAccounts = createAsyncThunk('customerAccounts/fetchCustomerAccounts', ()=>{
    return axios
    .get('http://127.0.0.1:5001/api/customer/accounts')
    .then((response)=> { return response.data.customers })
})

const slice = createSlice({
    name: 'customerAccounts',
    initialState: {
        loading: false,
        customerAccounts: [],
        error: ''
    },
    reducers: {
        clearCustomerAccounts: (state)=>{
            state.loading = false
            state.customerAccounts = []
            state.error = ''
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCustomerAccounts.pending, (state)=>{
            state.loading = true
            state.customerAccounts = []
            state.error = ''
        })
        builder.addCase(fetchCustomerAccounts.fulfilled, (state, action)=>{
            state.loading = false
            state.customerAccounts = action.payload
            state.error = ''
        })
        builder.addCase(fetchCustomerAccounts.rejected, (state, action)=>{
            state.loading = false
            state.customerAccounts = []
            state.error = action.error.message
        })
    }
})

export const { clearCustomerAccounts } = slice.actions
export default slice.reducer