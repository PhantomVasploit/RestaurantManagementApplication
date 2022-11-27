import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSales = createAsyncThunk('sales/fetchSales', ()=>{
    return axios
    .get('http://127.0.0.1:5005/api/reservations/sales')
    .then((response)=>{ return response.data.sales })
})

const slice = createSlice({
    name: 'sales',
    initialState: {
        loading: false,
        sales: [],
        labels: [],
        datasets: [{
            label: 'Total Sales (KES)',
            data: []
        }],
        error: '' 
    },
    reducers: {
        clearSales: (state)=>{
            state.loading = false
            state.sales = []
            state.error = ''
        },
        refineSales: (state)=>{
            state.sales.map((sale)=>{
                state.labels.push(sale)
                state.datasets[0].data.push( parseInt(sale.quantityOrdered) * parseInt(sale.itemPrice) )
                return sale
            })
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchSales.pending, (state)=>{
            state.loading = true
            state.sales = []
            state.error = ''
        })
        builder.addCase(fetchSales.fulfilled, (state, action)=>{
            state.loading = false
            state.sales = action.payload
            state.error = ''
        })
        builder.addCase(fetchSales.rejected, (state, action)=>{
            state.loading = false
            state.fetchSales = []
            state.error = action.error.message
        })
    }
})

export const { clearSales, refineSales } = slice.actions
export default slice.reducer