import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    authenticationToken: ''
  },
  reducers: {
    login: (state, action)=>{
      state.user.firstName = action.payload.firstName;
      state.user.lastName = action.payload.lastName;
      state.user.email = action.payload.email;
      state.user.phoneNumber = action.payload.phoneNumber;
      state.user.authenticationToken = action.payload.jwt;
    },
    logout: (state, action)=>{
      state.user.firstName = '';
      state.user.lastName = '';
      state.user.email = '';
      state.user.phoneNumber = '';
      state.user.authenticationToken = '';
    }
  }
});

export const { login, logout } = slice.actions;
export default slice.reducer;
