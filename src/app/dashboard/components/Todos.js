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

export const Todos = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onCreate = (values) => {
    console.log("THERE ARE VALUES", values);
    //   async logic here
  };

  return (
    <TodoWrapper>
      <TodoHeader>Todos</TodoHeader>
      <TodoBoxWrapper>
        <TodoBox>
          <TodoTypes>
            <p>To do</p>
            <p>2</p>
          </TodoTypes>
          <TodoAdd onClick={handleOpen}> + </TodoAdd>
        </TodoBox>
        <TodoBox>
          <TodoTypes>
            <p>In Progress</p>
            <p>2</p>
          </TodoTypes>
          <TodoAdd> + </TodoAdd>
        </TodoBox>
        <TodoBox>
          <TodoTypes>
            <p>Completed</p>
            <p>2</p>
          </TodoTypes>
          <TodoAdd> + </TodoAdd>
        </TodoBox>
      </TodoBoxWrapper>
      <DraggableDialog
        onCreate={onCreate}
        open={open}
        handleClose={handleClose}
      />
    </TodoWrapper>
  );
};
