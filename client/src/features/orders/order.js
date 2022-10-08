import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemName: '',
    itemPrice: parseFloat(0),
    itemImgUrl: '',
    itemQuantity: parseFloat(0),
    itemSubTotal: parseFloat(0),
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
            state.itemSubTotal = action.payload.price   
            state.orders = [...state.orders, {name: state.itemName, price: state.itemPrice, imgUrl: state.itemImgUrl, quantity: state.itemQuantity, subTotal: state.itemSubTotal}]
        },
        increaseQuantity: (state, action)=>{
            state.orders.map((item)=>{
               return item.name === action.payload.name ? item.quantity += 1 : item.quantity
            })
        },
        decreaseQuantity: (state, action)=>{
            state.orders.map((item)=>{
                return item.name === action.payload.name && item.quantity > 1 ? item.quantity -= 1 : item.quantity 
            })
        },
        increasePrice: (state, action)=>{
            state.orders.map((item)=>{
                return item.name === action.payload.name ? item.subTotal = item.quantity * item.price : item.price 
            })
        },
        decreasePrice: (state, action)=>{
            state.orders.map((item)=>{
                return item.name === action.payload.name ? item.subTotal = item.quantity / item.price : item.price 
            })
        },
        removeItem: (state, action)=>{
            let itemIndex = state.orders.map((order)=> { return state.orders.indexOf(order.name === action.payload.name) })
            state.orders.splice(itemIndex, 1)
        },
        clearOrders: (state)=>{
            state.orders = []
        }
    }
})

export const { addOrder, increaseQuantity, decreaseQuantity, increasePrice, decreasePrice, removeItem, clearOrders } = slice.actions;
export default slice.reducer;