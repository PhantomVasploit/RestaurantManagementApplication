import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {
        addOrder: (state, action)=>{
            state.push(action.payload);
        },
        removeOrder: (state, action)=>{
            state.filter(item => item._id === action.payload);
        },
        clearOrders: (state)=>{
            state = [];
        }
    }
})

export const { addOrder, removeOrder, clearOrders } = slice.actions;
export default slice.reducer;