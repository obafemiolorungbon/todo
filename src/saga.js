import { all } from "redux-saga/effects";
import todoSaga from "./app/dashboard/redux/saga";

export default function* root() {
  yield all([todoSaga()]);
}
