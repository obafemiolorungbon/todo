import { createSelector } from "@reduxjs/toolkit";
import { todoSelector } from "./reducer";

const todoObject = (state = {}) => state.todos;

export const selectTodos = createSelector(todoObject, (todoObject) =>
  todoSelector.selectAll(todoObject.todolist)
);

export const selectLoading = createSelector(
  todoObject,
  (todoObject) => todoObject.ui.loading
);
