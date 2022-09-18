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
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state.phoneNumber = action.payload.phoneNumber
            state.authenticationToken = action.payload.jwt
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