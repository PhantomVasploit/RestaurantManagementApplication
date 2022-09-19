import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'chef',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        authenticationToken: ''
    },
    reducers: {
        login: (state, action)=>{
            state.firstName = action.payload.data.chef.firstName
            state.lastName = action.payload.data.chef.lastName
            state.email = action.payload.data.chef.email
            state.phoneNumber = action.payload.data.chef.phoneNumber
            state.authenticationToken = action.payload.data.jwt
        },
        logout: (state)=>{
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