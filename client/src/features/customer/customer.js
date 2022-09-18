import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'customer',
    initialState: {
        customerId: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        authenticationToken: ''
    },
    reducers:{
        login: (state, action)=>{
            state.customerId = action.payload.data.customer._id
            state.firstName = action.payload.data.customer.firstName
            state.lastName = action.payload.data.customer.lastName
            state.email = action.payload.data.customer.email
            state.phoneNumber = action.payload.data.customer.phoneNumber
            state.authenticationToken = action.payload.data.jwt
        },
        logout: (state)=>{
            state.customerId = ''
            state.firstName = ''
            state.lastName = ''
            state.email = ''
            state.phoneNumber = ''
            state.authenticationToken = ''
        }
    }
})

export const { login, logout } = slice.actions;
export default slice.reducer;