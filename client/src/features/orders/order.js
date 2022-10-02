import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemName: '',
    itemPrice: 0,
    itemImgUrl: '',
    itemQuantity: 0,
    orders: []
}

const slice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder: (state, action)=>{
            state.itemName = action.payload.name
            state.itemPrice = action.payload.price
            state.itemImgUrl = action.payload.imgUrl
            state.itemQuantity = 1
            state.orders = [...state.orders, {name: state.itemName, price: state.itemPrice, imgUrl: state.itemImgUrl, quantity: state.itemQuantity}]
        },
        increaseQuantity: (state, action)=>{
            state.orders.map((item)=>{
                if(item.name === action.payload.name){
                    return item.itemQuantity += 1
                }
            })
        },
        decreaseQuantity: (state, action)=>{
            state.orders.map((item)=>{
                if(item.name === action.payload.name){
                    return item.itemQuantity > 1 ? item.itemQuantity -= 1 : item.itemQuantity = 1
                }
            })
        },
        removeItem: (state, action)=>{
            state.orders.filter((item)=>item.name === action.payload.name)   
        }
    }
})

export const { addOrder, increaseQuantity, decreaseQuantity, removeItem } = slice.actions;
export default slice.reducer;