import { put, takeEvery, call } from "@redux-saga/core/effects";
import { dataService } from "../../../services";
import {
  api_call_failed,
  login,
  login_success,
  register,
  register_success,
} from "./reducer";
import { toast } from "react-toastify";

function* registerUser(action) {
  try {
    const { data } = action.payload;
    console.log("first", data);
    const response = yield call(dataService.postData, `user`, data);
    yield put({ type: register_success.type, payload: response });
  } catch (e) {
    yield put({
      type: api_call_failed.type,
    });
    toast.error("failed to register user try again later");
  }
}
function* loginUser(action) {
  try {
    const { data } = action.payload;
    const response = yield call(dataService.postData, `user`, data);
    yield put({ type: login_success.type, payload: response });
  } catch (e) {
    yield put({
      type: api_call_failed.type,
    });
    toast.error("failed to login user, try again later");
  }
}

function* authSaga() {
  yield takeEvery(register.type, registerUser);
  yield takeEvery(login.type, loginUser);
}

export default authSaga;
