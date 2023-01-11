import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./User/UserSlice";
import postsSlice from "./Posts/PostsSlice";
import profileSlice from "./Profile/ProfileSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    posts: postsSlice,
    profile: profileSlice,
  },
});
