import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBreakfastBites = createAsyncThunk('menu/fetchBreakfastBites', ()=>{
  return axios
    .get('http://127.0.0.1:5003/api/menu/breakfast-bites')
    .then((response)=>{return response.data});
});

const slice = createSlice({
  name: 'breakfastBites',
  intialState: {
    loading: false,
    breakfastBites: [],
    error: ''
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchBreakfastBites.pending, (state, action)=>{
      state.loading = true;
      state.breakfastBites = [];
      state.error = '';
    });
    builder.addCase(fetchBreakfastBites.fulfilled, (state, action)=>{
      state.loading = false;
      state.breakfastBites = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBreakfastBites.rejected, (state, action)=>{
      state.loading = false;
      state.breakfastBites = [];
      state.error = action .error.message;
    })
  }
});

export default slice.reducer;
