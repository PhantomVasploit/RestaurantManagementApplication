import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAperitifsAndBitters = createAsyncThunk('aperitifsAndBitters/fetchAperitifsAndBitters', ()=>{
  return axios
    .get('http://127.0.0.1:5003/api/menu/apperitif')
    .then( (response) => {return response.data.apperitifDrinks});
});

const slice = createSlice({
  name: 'apperitifAndBitters',
  initialState: {
    loading: false,
    aperitifsAndBitters: [],
    error: ''
  },
  reducers: {
    clearAperiritifsAndBitters: (state)=>{
       state.loading = false
       state.error = ''
       state.aperitifsAndBitters = []
    }
  }
  ,
  extraReducers: (builder)=>{
    builder.addCase(fetchAperitifsAndBitters.pending, (state)=>{
      state.loading = true;
      state.aperitifsAndBitters = [];
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

export const { clearAperiritifsAndBitters } = slice.actions;
export default slice.reducer;
