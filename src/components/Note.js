import React from "react";
import DisplayNote from "./DisplayNote";
import Card from "@material-ui/core/Card";
import NoteHeader from "./NoteHeader";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import NoteTextfield from "./NoteTextfield";

function Note(props) {
  return (
    <Box my={2}>
      <Card>
        <NoteHeader {...props} />
        <Divider variant="middle" />
        {props.data.canEdit ? (
          <NoteTextfield {...props} />
        ) : (
          <DisplayNote
            data={props.data}
            keyNr={props.keyNr}
            toggleDisplay={props.toggleDisplay}
            onClick={() => props.toggleDisplay(props.keyNr, true)}
          />
        )}
      </Card>
    </Box>
  );
}

export default Note;
