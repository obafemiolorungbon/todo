import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import { TextField } from "@mui/material";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog({ handleClose, open, onCreate }) {
  const [todo, setTodo] = React.useState("");
  const [todoNote, setTodoNote] = React.useState("");
  const cleanUp = () => {
    setTodo("");
    setTodoNote("");
    handleClose();
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: "move" }} id="draggable-dialog-title">
          Create Todo
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Kindly enter todo's title, as well as a small note on how to
            complete it 🙂
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="todo"
            label="Todo Title"
            type="text"
            fullWidth
            variant="standard"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="note"
            label="Todo Notes"
            type="text"
            fullWidth
            value={todoNote}
            onChange={(e) => {
              setTodoNote(e.target.value);
            }}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={cleanUp}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onCreate({
                todo,
                todoNote,
              });
              cleanUp();
            }}
          >
            Create Todo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
