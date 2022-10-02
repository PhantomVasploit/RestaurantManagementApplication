import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemName: '',
    itemPrice: 0,
    itemImgUrl: '',
    itemQuantity: 0
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
        }
    }
})

export const { addOrder } = slice.actions;
export default slice.reducer;