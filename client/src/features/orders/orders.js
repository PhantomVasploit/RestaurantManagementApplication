import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'orders',
    initialState: [],
    reducers: {
        addOrders: (state, action)=>{
            state.concat(action.payload)
        },
        increaseQuantity: (state, action)=>{
            state.map((item)=>{
                if(item.itemName === action.payload.name){
                    return item.itemQuantity += 1
                }
            })
        },
        decreaseQuantity: (state, action)=>{
            state.map((item)=>{
                if(item.itemName === action.payload.name){
                    return item.itemQuantity > 1 ? item.itemQuantity -= 1 : item.itemQuantity = 1
                }
            })
        },
        removeItem: (state, action)=>{
            state.filter((item)=>item.itemName === action.payload.name)   
        }
    }
})

export const { addOrders, increaseQuantity, decreaseQuantity, removeItem } = slice.actions;
export default slice.reducer;