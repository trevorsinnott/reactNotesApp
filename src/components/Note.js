import React from "react";
import DisplayNote from "./DisplayNote";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import NoteTextfield from "./NoteTextfield";

function Note(props) {
  return (
    <Box my={2}>
      <Card>
        {props.data.canEdit ? (
          <NoteTextfield {...props} />
        ) : (
          <DisplayNote
            {...props}
            onClick={() => props.toggleDisplay(props.keyNr, true)}
          />
        )}
      </Card>
    </Box>
  );
}

export default Note;
