import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMainCourseMeals = createAsyncThunk('mainCourseMeals/fetchMainCourseMeals', ()=>{
  return axios
    .get('http://127.0.0.1:5003/api/menu/main-course')
    .then( (response) => {return response.data.mainCourseMeals});
});

const slice = createSlice({
  name: 'mainCourse',
  initialState: {
    loading: false,
    mainCourseMeals: [],
    error: ''
  },
  reducers: {
    clearMainCourseMeals: (state)=>{
      state.loading = false
      state.mainCourseMeals = []
      state.error = ''
    }
  },
  extraReducers: (builder) =>{
    builder.addCase(fetchMainCourseMeals.pending, (state)=>{
      state.loading = true;
    });
    builder.addCase(fetchMainCourseMeals.fulfilled, (state, action)=>{
      state.loading = false;
      state.mainCourseMeals = action.payload;
      state.error = ''
    });
    builder.addCase(fetchMainCourseMeals.rejected, (state, action)=>{
      state.loading = false;
      state.mainCourseMeals = [];
      state.error = action.error.message;
    })
  }
});

export const { clearMainCourseMeals } = slice.actions;

export default slice.reducer;
