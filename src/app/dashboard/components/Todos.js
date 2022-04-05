import { useState } from "react";
import DraggableDialog from "./CreateModal";
import {
  TodoAdd,
  TodoBox,
  TodoBoxWrapper,
  TodoHeader,
  TodoTypes,
  TodoWrapper,
} from "./styles";
import PropTypes from "prop-types";
import BasicCard from "./TodoCard";
import EditDialog from "./EditModal";
import DeleteDialog from "./DeleteModal";

export const Todos = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleCloseEditModal = () => setOpenEditModal(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const [currentTodo, setCurrentTodo] = useState({});
  const { handleCreateTodo, todos, handleDelete, handleUpdateTodo } = props;
  const onCreate = (values) => {
    handleCreateTodo(values);
  };

  const onClickDeleteIcon = (todo) => {
    setCurrentTodo(todo);
    setOpenDeleteModal(true);
  };

  const onEdit = (values) => {
    handleUpdateTodo(values);
  };

  const onView = (todo) => {
    setCurrentTodo(todo);
    setOpenEditModal(true);
  };

  const onDelete = (id) => {
    handleDelete(id);
  };

  const pendingTodos = todos.filter((todo) => todo.status === "created");
  const inProgressTodos = todos.filter((todo) => todo.status === "in progress");
  const completedTodos = todos.filter((todo) => todo.status === "completed");

  return (
    <TodoWrapper>
      <TodoHeader>Todos</TodoHeader>
      <TodoBoxWrapper>
        <TodoBox>
          <TodoTypes>
            <p>To do</p>
            <p>{pendingTodos.length || 0}</p>
          </TodoTypes>
          <TodoAdd onClick={handleOpen}> + </TodoAdd>
          {pendingTodos.map((todo) => (
            <BasicCard
              todo={todo}
              onView={onView}
              onDelete={onClickDeleteIcon}
              key={todo._id}
            />
          ))}
        </TodoBox>
        <TodoBox>
          <TodoTypes>
            <p>In Progress</p>
            <p>{inProgressTodos.length || 0}</p>
          </TodoTypes>
          {inProgressTodos.map((todo) => (
            <BasicCard
              todo={todo}
              onView={onView}
              onDelete={onClickDeleteIcon}
              key={todo._id}
            />
          ))}
        </TodoBox>
        <TodoBox>
          <TodoTypes>
            <p>Completed</p>
            <p>{completedTodos.length || 0}</p>
          </TodoTypes>
          {completedTodos.map((todo) => (
            <BasicCard
              todo={todo}
              onView={onView}
              onDelete={onClickDeleteIcon}
              key={todo._id}
            />
          ))}
        </TodoBox>
      </TodoBoxWrapper>
      <DraggableDialog
        onCreate={onCreate}
        open={open}
        handleClose={handleClose}
      />
      <EditDialog
        onEdit={onEdit}
        handleClose={handleCloseEditModal}
        open={openEditModal}
        todo={currentTodo}
      />
      <DeleteDialog
        onDelete={onDelete}
        handleClose={handleCloseDeleteModal}
        open={openDeleteModal}
        todo={currentTodo}
      />
    </TodoWrapper>
  );
};

Todos.propTypes = {
  handleCreateTodo: PropTypes.func.isRequired,
};
