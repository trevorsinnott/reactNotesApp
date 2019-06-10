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
    <>
      <NoteHeader {...props} />
      <CardContent style={{ flexGrow: "1" }}>
        <ClickAwayListener
          onClickAway={event => props.toggleDisplay(event, props.keyNr, false)}
        >
          <form>
            <TextField
              fullWidth={true}
              multiline={true}
              variant="outlined"
              autoFocus={true}
              onClick={event => props.toggleDisplay(event, props.keyNr, true)}
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
      <CardActions style={{display: "flex", justifyContent: "flex-end"}}>
        <Button
          variant="contained"
          size="small"
          onClick={event => props.toggleDisplay(event, props.keyNr, false)}
        >
          Save
        </Button>
        <DeleteNoteButton {...props} />
      </CardActions>
    </>
  );
}

export default NoteTextfield;
