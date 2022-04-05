import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

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

export default function EditDialog({ handleClose, open, onEdit, todo }) {
  const [todoNote, setTodoNote] = React.useState(todo?.note);
  const [todoEdit, setTodoEdit] = React.useState(todo?.title);
  const [todoStatus, setTodoStatus] = React.useState(todo?.status);

  React.useEffect(() => {
    setTodoNote(todo?.note);
    setTodoEdit(todo?.title);
    setTodoStatus(todo?.status);
  }, [todo]);
  const cleanUp = () => {
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
          Edit Todo
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Change details about this Todo</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="todo"
            label="Todo Title"
            type="text"
            fullWidth
            variant="standard"
            value={todoEdit}
            onChange={(e) => {
              setTodoEdit(e.target.value);
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
            sx={{ mb: 2 }}
          />
          <FormControl>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={todoStatus}
              label="Status"
              onChange={(e) => {
                setTodoStatus(e.target.value);
              }}
            >
              <MenuItem value={"created"}>Created</MenuItem>
              <MenuItem value={"in progress"}>In Progress</MenuItem>
              <MenuItem value={"completed"}>Completed</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={cleanUp}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onEdit({
                data: {
                  title: todoEdit,
                  note: todoNote,
                  status: todoStatus,
                },
                id: todo._id,
              });
              cleanUp();
            }}
          >
            Save Todo
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
