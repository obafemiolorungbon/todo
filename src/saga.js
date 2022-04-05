import { all } from "redux-saga/effects";
import authSaga from "./app/auth/redux/saga";
import todoSaga from "./app/dashboard/redux/saga";

export default function* root() {
  yield all([todoSaga(), authSaga()]);
}
