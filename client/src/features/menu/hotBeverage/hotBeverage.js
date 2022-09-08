import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchHotBeverage = createAsyncThunk('hotBeverage/fetchHotBeverage', ()=>{
  return axios
    .get("http://127.0.0.1:5003/api/menu/hot-beverage")
    .then( (response) => {return response.data});
})

const slice = createSlice({
  name: 'hotBeverage',
  initialState: {
    loading: false,
    hotBeverage: [],
    error: ''
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchHotBeverage.pending, (state, action)=>{
      state.loading = true;
      state.hotBeverage = [];
      state.error = '';
    });
    builder.addCase(fetchHotBeverage.fulfilled, (state, action)=>{
      state.loading = false;
      state.hotBeverage = action.payload;
      state.error = '';
    });
    builder.addCase(fetchHotBeverage.rejected, (state, action)=>{
      state.loading = false;
      state.hotBeverage = [];
      state.error = action.error.message;
    });
  }
});

export default slice.reducer;
