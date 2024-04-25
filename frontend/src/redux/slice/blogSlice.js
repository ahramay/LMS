import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get(`http://localhost:5151/api/articles`);
    return response.data;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: { blogs: [], loading: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
