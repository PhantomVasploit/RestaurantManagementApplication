import { createSlice, createAsyncThunk } from  '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBourbonAndTennessee = createAsyncThunk('bourbonAndTennessee/fetchBourbonAndTennessee', ()=>{
  return axios
    .get('http://127.0.0.1:5003/api/menu/bourbon')
    .then((response)=>{return response.data.bourbonDrinks});
});

const slice = createSlice({
  name: 'bourbonAndTennessee',
  initialState: {
    loading: false,
    bourbonAndTennessee: [],
    error: ''
  },
  reducers: {
    clearbourbonAndTenneessee: (state)=>{
      state.loading = false
      state.error = ''
      state.bourbonAndTennessee = []
    }
  }
  ,
  extraReducers: (builder)=>{
    builder.addCase(fetchBourbonAndTennessee.pending, (state)=>{
      state.loading = true;
      state.bourbonAndTennessee = [];
      state.error = '';
    });
    builder.addCase(fetchBourbonAndTennessee.fulfilled, (state, action)=>{
      state.loading = false;
      state.bourbonAndTennessee = action.payload;
      state.error = '';
    });
    builder.addCase(fetchBourbonAndTennessee.rejected, (state, action)=>{
      state.loading = false;
      state.bourbonAndTennessee = [];
      state.error = action.error.message;
    })
  }
})

export const { clearbourbonAndTenneessee } = slice.actions;
export default slice.reducer;
