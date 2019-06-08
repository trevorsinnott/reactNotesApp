import React from "react";
import TextField from "@material-ui/core/TextField";
import { CardContent, Divider, Button, CardActions } from "@material-ui/core";
import NoteHeader from "./NoteHeader";

function NoteTextfield(props) {
  return (
    <>
      <NoteHeader {...props} />
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
      <Divider />
      <CardActions>
        <Button variant="contained" size="small">
          Save
        </Button>
      </CardActions>
    </>
  );
}

export default NoteTextfield;
