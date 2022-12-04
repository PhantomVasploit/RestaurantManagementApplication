import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCustomerReservations = createAsyncThunk('customerReservations/fetchCustomerReservations', ()=>{
    const date = new Date().toDateString()
    return axios
    .get(`http://127.0.0.1:5005/api/reservations/date/${date}`)
    .then((response)=>{ return response.data.reservations })
})

const slice = createSlice({
    name: 'customerReservations',
    initialState: {
        loading: false,
        data: [],
        error: ''
    },
    reducers: {
        clearData: (state)=>{
            state.loading = false
            state.data = []
            state.error = ''
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCustomerReservations.pending, (state)=>{
            state.loading = true
            state.data = []
            state.error = ''
        })
        builder.addCase(fetchCustomerReservations.fulfilled, (state, action)=>{
            state.loading = false
            state.error = ''
            state.data = action.payload
        })
        builder.addCase(fetchCustomerReservations.rejected, (state, action)=>{
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export const { clearData } = slice.actions
export default slice.reducer