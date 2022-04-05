import { DashboardLayout } from "./components/DashboardLayout";
import { MainView } from "./components/MainView";
import { SideNav } from "./components/SideNav";
import { useDispatch, useSelector } from "react-redux";
import {
  create_todo,
  get_todos,
  update_todo,
  delete_todo,
} from "./redux/reducer";
import { useEffect } from "react";
import { selectTodos } from "./redux/selector";
import { selectUser } from "../auth/redux/selectors";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const loggedInUser = useSelector(selectUser);

  const handleCreateTodo = (values) => {
    dispatch(create_todo({ data: values }));
  };

  const handleUpdateTodo = (values) => {
    dispatch(update_todo(values));
  };

  const handleDelete = (values) => {
    dispatch(delete_todo(values));
  };

  useEffect(() => {
    dispatch(get_todos({ id: loggedInUser.email }));
  }, [dispatch, loggedInUser]);
  return (
    <DashboardLayout>
      <SideNav />
      <MainView
        handleCreateTodo={handleCreateTodo}
        handleUpdateTodo={handleUpdateTodo}
        handleDelete={handleDelete}
        todos={todos}
        user={loggedInUser}
      />
    </DashboardLayout>
  );
};
