import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  CardContent,
  Divider,
  Button,
  CardActions,
  ClickAwayListener
} from "@material-ui/core";
import NoteHeader from "./NoteHeader";
import DeleteNoteButton from "./DeleteNoteButton";

function NoteTextfield(props) {
  return (
    <div>
      <NoteHeader {...props} />
      <CardContent>
        <ClickAwayListener
          onClickAway={() => props.toggleDisplay(props.keyNr, false)}
        >
          <form>
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
        </ClickAwayListener>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => props.toggleDisplay(props.keyNr, false)}
        >
          Save
        </Button>
        <DeleteNoteButton {...props} />
      </CardActions>
    </div>
  );
}

export default NoteTextfield;
