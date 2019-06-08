import React from "react";
import TextField from "@material-ui/core/TextField";
import { CardContent } from "@material-ui/core";

function NoteTextfield(props) {
  return (
    <CardContent>
      <form onBlur={() => props.toggleDisplay(props.keyNr, false)}>
        <TextField
          fullWidth={true}
          multiline={true}
          variant="outlined"
          autoFocus={true}
          onClick={() => props.toggleDisplay(props.keyNr, true)}
          name="body"
          value={props.data.body}
          onChange={event => {
            props.handleChange(event, props.keyNr);
          }}
        />
      </form>
    </CardContent>
  );
}

export default NoteTextfield;
