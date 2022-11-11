import { Fab } from "@mui/material";

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
