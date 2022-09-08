import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBeer = createAsyncThunk('beer/fetchBeer', ()=>{
  return axios
    .get('http://127.0.0.1:5003/api/menu/beer')
    .then((response)=>{return response.data});
});

const slice = createSlice({
  name: 'beer',
  initialState: {
    loading: false,
    beer: [],
    error: ''
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchBeer.pending, (state, action)=>{
      state.loading = true;
      state.beer = [];
      state.error = '';
    });
    builder.addCase(fetchBeer.fulfilled, (state, action)=>{
      state.loading = false;
      state.beer = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBeer.rejected, (state, action)=>{
      state.loading = false;
      state.beer = [];
      state.error = action.error.message;
    });
  }
});

export default slice.reducer;
