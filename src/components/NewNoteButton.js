import React from "react";
import Fab from "@material-ui/core/Fab";

function NewNoteButton(props) {
  return (
    <Fab
      variant="extended"
      name="newNote"
      onClick={event => {
        props.createNote(event);
      }}
    >
      New Note
    </Fab>
  );
}

export default NewNoteButton;
