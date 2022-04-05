import { combineReducers } from "redux";
import todoReducerSlice from "./app/dashboard/redux/reducer";

const rootReducers = combineReducers({
  todos: todoReducerSlice,
});

export default rootReducers;
