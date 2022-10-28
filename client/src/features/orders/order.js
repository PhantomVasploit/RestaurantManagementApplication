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
            state.orders = [...state.orders, {itemName: state.itemName, itemPrice: state.itemPrice, imgUrl: state.itemImgUrl, quantityOrdered: state.itemQuantity, subTotal: state.itemSubTotal}]
        },
        increaseQuantity: (state, action)=>{
            state.orders.map((item)=>{
               return item.itemName === action.payload.itemName ? item.quantityOrdered += 1 : item.quantityOrdered
            })
        },
        decreaseQuantity: (state, action)=>{
            state.orders.map((item)=>{
                return item.itemName === action.payload.itemName && item.quantityOrdered > 1 ? item.quantityOrdered -= 1 : item.quantityOrdered 
            })
        },
        increasePrice: (state, action)=>{
            state.orders.map((item)=>{
                return item.itemName === action.payload.itemName ? item.subTotal = item.itemPrice * item.quantityOrdered : item.itemPrice 
            })
        },
        decreasePrice: (state, action)=>{
            state.orders.map((item)=>{
                return item.itemName === action.payload.itemName ? item.subTotal = item.itemPrice / item.quantityOrdered : item.itemPrice 
            })
        },
        removeItem: (state, action)=>{
            let itemIndex = state.orders.map((order)=> { return state.orders.indexOf(order.quantityOrdered === action.payload.quantityOrdered) })
            state.orders.splice(itemIndex, 1)
        },
        clearOrders: (state)=>{
            state.orders = []
        }
    }
})

export const { addOrder, increaseQuantity, decreaseQuantity, increasePrice, decreasePrice, removeItem, clearOrders } = slice.actions;
export default slice.reducer;