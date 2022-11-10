import React from "react";
// import Fab from "@mui/material/Fab";
import { Fab } from "@material-ui/core";

function NewNoteButton(props) {
  return (
    <Fab
      size="medium"
      variant="extended"
      name="newNote"
      onClick={(event) => {
        props.createNote(event);
      }}
    >
      New Note
    </Fab>
  );
}

export default NewNoteButton;
