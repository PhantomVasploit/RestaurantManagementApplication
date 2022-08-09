import { createSlice, createAsyncThunk } from  '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBourbonAndTennessee = createAsyncThunk('menu/fetchBourbonAndTennessee', ()=>{
  return axios
    .get('http://127.0.0.1:5003/api/menu/bourbon')
    .then((response)=>{return response.data});
});

const slice = createSlice({
  name: 'bourbonAndTennessee',
  intialState: {
    loading: false,
    bourbonAndTennessee: [],
    error: ''
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchBourbonAndTennessee.pending, (state, action)=>{
      state.loading = true;
      state.bourbonAndTennessee = [];
      state.error = '';
    });
    builder.addCase(fetchBourbonAndTennessee.fulfilled, (state, action)=>{
      state.loading = false;
      state.bourbonAndTennessee = action.payload;
      state.error: '';
    });
    builder.addCase(fetchBourbonAndTennessee.rejected, (state, action)=>{
      state.loading = false;
      state.bourbonAndTennessee = [];
      state.error = action.error.message;
    })
  }
})

export default slice.reducer;