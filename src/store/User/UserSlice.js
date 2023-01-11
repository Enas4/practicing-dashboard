import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  status: "idle",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    logout: (state) => {
      state.data = null;
      state.status = "idle";
    },
    setState: (state, { payload }) => {
      state.status = payload;
    },
  },
});

export const { login, logout, setState } = UserSlice.actions;
export default UserSlice.reducer;
