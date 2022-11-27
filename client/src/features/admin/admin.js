import { createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'admin',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    authenticationToken: ''
  },
  reducers: {
    login: (state, action)=>{
      state.firstName = action.payload.data.admin.firstName
      state.lastName = action.payload.data.admin.lastName
      state.email = action.payload.data.admin.email
      state.phoneNumber = action.payload.data.admin.phoneNumber
      state.authenticationToken = action.payload.data.jwt
    },

    logout: (state, action)=>{
      state.firstName = '';
      state.lastName = '';
      state.email = '';
      state.authenticationToken = '';
    }
  }
});

export const { login, logout } = slice.actions;
export default slice.reducer;
