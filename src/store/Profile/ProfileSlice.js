import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

export const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loadProfile: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { loadProfile } = ProfileSlice.actions;
export default ProfileSlice.reducer;
