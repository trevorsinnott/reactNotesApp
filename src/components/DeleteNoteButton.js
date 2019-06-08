import React from "react";
import Button from "@material-ui/core/Button";

function DeleteNoteButton(props) {
  return (
    <Button
      variant="outlined"
      size="small"
      key={props.keyNr}
      name="deleteNote"
      onClick={event => props.handleSubmit(event, props.keyNr)}
      className="deleteNoteButton"
    >
      Delete
    </Button>
  );
}

export default DeleteNoteButton;
