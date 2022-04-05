import { createSelector } from "@reduxjs/toolkit";

const userObject = (state = {}) => state.auth;

export const selectUser = createSelector(
  userObject,
  (userObject) => userObject.user
);

export const selectLoading = createSelector(
  userObject,
  (userObject) => userObject.ui.loading
);
