import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";

export default function BasicCard({ todo, onDelete, onView }) {
  return (
    <Card sx={{ minWidth: 275, marginBottom: "12px", marginTop: "12px" }}>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <CircleIcon
            style={{ fontSize: "8px", marginRight: "12px" }}
            fontSize="small"
          />
          <Typography
            sx={{ display: "inline-block", textTransform: "capitalize" }}
            variant="h6"
            color="text.secondary"
          >
            {todo?.title}
          </Typography>
        </div>

        <Typography variant="body2">{todo?.note}</Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Button size="small" onClick={() => onView(todo)}>
          View Task
        </Button>
        <DeleteIcon
          style={{ cursor: "pointer" }}
          onClick={() => onDelete(todo)}
        />
      </CardActions>
      <br />
    </Card>
  );
}
