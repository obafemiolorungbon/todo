import { put, takeEvery, call } from "@redux-saga/core/effects";
import { dataService } from "../../../services";
import {
  api_call_failed,
  create_todo,
  create_todo_success,
  delete_todo,
  delete_todo_success,
  get_todos,
  get_todos_success,
  update_todo,
  update_todo_success,
} from "./reducer";
import { toast } from "react-toastify";

function* updateTodo(action) {
  try {
    const { data, id } = action.payload;
    const response = yield call(dataService.putData, `todo/${id}`, data);
    yield put({ type: update_todo_success.type, payload: response });
    toast.success("Todo updated successfully");
  } catch (e) {
    yield put({
      type: api_call_failed.type,
    });
    toast.error("failed to update todo, try again later");
  }
}
function* createTodo(action) {
  try {
    const { data } = action.payload;
    const response = yield call(dataService.postData, `todo`, data);
    yield put({ type: create_todo_success.type, payload: response });
    toast.success("Todo created successfully");
  } catch (e) {
    console.log("first error", e);
    yield put({
      type: api_call_failed.type,
    });
    toast.error("failed to create todo, try again later");
  }
}
function* deleteTodo(action) {
  try {
    const { id } = action.payload;
    const response = yield call(dataService.deleteData, `todo/${id}`);
    yield put({ type: delete_todo_success.type, payload: response });
    toast.success("Todo deleted successfully");
  } catch (e) {
    yield put({
      type: api_call_failed.type,
    });
    toast.error("failed to delete todo, try again later");
  }
}
function* getTodos(action) {
  try {
    const { id } = action.payload;
    const response = yield call(dataService.getData, `todo/${id}`);
    yield put({ type: get_todos_success.type, payload: response });
  } catch (e) {
    yield put({
      type: api_call_failed.type,
    });
    toast.error("failed to get toldos, try again later");
  }
}

function* todoSaga() {
  yield takeEvery(update_todo.type, updateTodo);
  yield takeEvery(create_todo.type, createTodo);
  yield takeEvery(delete_todo.type, deleteTodo);
  yield takeEvery(get_todos.type, getTodos);
}

export default todoSaga;
