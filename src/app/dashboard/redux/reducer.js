import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const todoAdapter = createEntityAdapter({
  selectId: (todos) => todos._id,
});

const initialState = {
  ui: {
    loading: false,
  },
  todolist: todoAdapter.getInitialState(),
};

export const todoReducerSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    create_todo: (state) => {
      state.ui.loading = true;
    },
    create_todo_success: (state, action) => {
      state.ui.loading = false;
      const { todo } = action.payload;
      todoAdapter.addOne(state.todolist, todo);
    },
    update_todo: (state) => {
      state.ui.loading = true;
    },
    update_todo_success: (state, action) => {
      const { data } = action.payload;
      todoAdapter.updateOne(state.todolist, { id: data._id, changes: data });
      state.ui.loading = false;
    },
    delete_todo: (state) => {
      state.ui.loading = true;
    },
    delete_todo_success: (state, action) => {
      const { data } = action.payload;
      todoAdapter.removeOne(state.todolist, data._id);
      state.ui.loading = false;
    },
    get_todos: (state) => {
      state.ui.loading = true;
    },
    get_todos_success: (state, { payload }) => {
      const { data } = payload;
      todoAdapter.setAll(state.todolist, data);
      state.ui.loading = false;
    },
    api_call_failed: (state) => {
      state.ui.loading = false;
    },
  },
});

export const {
  create_todo,
  create_todo_success,
  update_todo,
  update_todo_success,
  delete_todo,
  delete_todo_success,
  get_todos,
  get_todos_success,
  api_call_failed,
} = todoReducerSlice.actions;

export const todoSelector = todoAdapter.getSelectors();

export default todoReducerSlice.reducer;
