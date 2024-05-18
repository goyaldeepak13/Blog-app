import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],

};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
      addPost: (state, action) => {
        state.posts.push(action.payload.post); // Assuming you're adding a post object
      },
      deletePost: (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload.postId); // Assuming each post has a unique id
      },
      
    },
  });
  