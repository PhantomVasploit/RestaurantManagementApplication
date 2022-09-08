import { createSlice} from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'admin',
  initialState: {
    firstName: '',
    lastName: '',
    email: '',
    authenticationToken: ''
  },
  reducers: {
    login: (state, action)=>{
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.email = action.payload.email
      state.authenticationToken = action.payload.jwt
    },

    logout: (state, action)=>{
      state.admin.firstName = '';
      state.admin.lastName = '';
      state.admin.email = '';
      state.admin.authenticationToken = '';
    }
  }
});

export const { login, logout } = slice.actions;
export default slice.reducer;
