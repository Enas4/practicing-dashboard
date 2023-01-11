import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../../lib/http-client";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (_, thunkAPI) => {
    try {
      const response = await get("/posts/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong!");
    }
  }
);

export const getPost = createAsyncThunk(
  "posts/getPost",
  async (id, thunkAPI) => {
    try {
      const response = await get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong!");
    }
  }
);

const initialState = {
  posts: [],
  post: null,
  status: "idle",
  error: null,
};

export const PostsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "pending";
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.posts = payload;
    },
    [getPosts.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;
      state.data = null;
    },
    [getPost.pending]: (state) => {
      state.status = "pending";
    },
    [getPost.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.post = payload;
    },
    [getPost.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;
      state.post = null;
    },
  },
});

export default PostsSlice.reducer;
