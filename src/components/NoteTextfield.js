import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  CardContent,
  Divider,
  Button,
  CardActions,
  ClickAwayListener,
  Box
} from "@material-ui/core";
import NoteHeader from "./NoteHeader";
import DeleteNoteButton from "./DeleteNoteButton";

function NoteTextfield(props) {
  return (
    <Box>
      <NoteHeader {...props} />
      <Box flexGrow={1}>
      <CardContent>
        <ClickAwayListener
          onClickAway={(event) => props.toggleDisplay(event, props.keyNr, false)}
        >
          <form>
            <TextField
              fullWidth={true}
              multiline={true}
              variant="outlined"
              autoFocus={true}
              onClick={(event) => props.toggleDisplay(event, props.keyNr, true)}
              name="body"
              value={props.data.body}
              onChange={event => {
                props.handleChange(event, props.keyNr);
              }}
            />
          </form>
        </ClickAwayListener>
      </CardContent>
      </Box>
      <Box alignSelf="flex-end">
        <Divider />
        <CardActions>
          <Button
            variant="contained"
            size="small"
            onClick={(event) => props.toggleDisplay(event, props.keyNr, false)}
          >
            Save
          </Button>
          <DeleteNoteButton {...props} />
        </CardActions>
      </Box>
    </Box>
  );
}

export default NoteTextfield;
