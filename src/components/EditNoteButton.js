import React from "react";
import { Button } from "@material-ui/core";

function EditNoteButton(props) {
  return (
    <Button
      variant="contained"
      size="small"
      onClick={event => {
        props.onClick(event);
      }}
    >
      Edit
    </Button>
  );
}

export default EditNoteButton;
