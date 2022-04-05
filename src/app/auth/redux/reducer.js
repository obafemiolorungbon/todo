import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ui: {
    loading: false,
  },
  user: {},
};

export const authReducerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state) => {
      state.ui.loading = true;
    },
    register_success: (state, { payload }) => {
      state.ui.loading = false;
      const { user } = payload;
      state.user = user;
    },
    login: (state) => {
      state.ui.loading = true;
    },
    login_success: (state) => {
      state.ui.loading = true;
    },

    api_call_failed: (state) => {
      state.ui.loading = false;
    },
  },
});

export const {
  register_success,
  register,
  login,
  login_success,
  api_call_failed,
} = authReducerSlice.actions;

export default authReducerSlice.reducer;
