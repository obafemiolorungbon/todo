import { combineReducers } from "redux";
import authReducerSlice from "./app/auth/redux/reducer";
import todoReducerSlice from "./app/dashboard/redux/reducer";

const rootReducers = combineReducers({
  todos: todoReducerSlice,
  auth: authReducerSlice,
});

export default rootReducers;
