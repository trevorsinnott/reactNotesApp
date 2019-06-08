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
    <ClickAwayListener
      onClickAway={() => props.toggleDisplay(props.keyNr, false)}
    >
      <div>
        <NoteHeader {...props} />
        <CardContent>
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
          <DeleteNoteButton {...props}/>
        </CardActions>
      </div>
    </ClickAwayListener>
  );
}

export default NoteTextfield;
