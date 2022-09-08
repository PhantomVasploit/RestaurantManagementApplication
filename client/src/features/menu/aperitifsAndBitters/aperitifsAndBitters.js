import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAperitifsAndBitters = createAsyncThunk('aperitifsAndBitters/fetchAperitifsAndBitters', (state, action)=>{
  return axios
    .get('http://127.0.0.1:5003/api/menu/apperitif')
    .then( (response) => {return response.data});
});

const slice = createSlice({
  name: 'apperitifAndBitters',
  initialState: {
    loading: false,
    apperitifAndBitters: [],
    error: ''
  },
  extraReducers: (builder)=>{
    builder.addCase(fetchAperitifsAndBitters.pending, (state, action)=>{
      state.loading = true;
      state.apperitifAndBitters = [];
      state.error = '';
    });
    builder.addCase(fetchAperitifsAndBitters.fulfilled, (state, action)=>{
      state.loading = false;
      state.aperitifsAndBitters = action.payload;
      state.error = '';
    });
    builder.addCase(fetchAperitifsAndBitters.rejected, (state, action)=>{
      state.loading = false;
      state.aperitifsAndBitters = [];
      state.error = action.error.message;
    });
  }
});

export default slice.reducer;
