import React from "react";
import DeleteNoteButton from "./DeleteNoteButton";
import DisplayNote from "./DisplayNote";
import TextField from "@material-ui/core/TextField";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

function Note(props) {
  return (
    <Card>
      <CardHeader
        subheader={props.data.created}
        action={
          <DeleteNoteButton
          handleSubmit={props.handleSubmit}
          keyNr={props.keyNr}
        />
        }
      >
        <span name="created" htmlFor="title">
          Created:{" "}
          <time dateTime={props.data.created}>{props.data.created}</time>
        </span>
        
      </CardHeader>
      {props.data.canEdit ? (
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
      ) : (
        <DisplayNote
          data={props.data}
          keyNr={props.keyNr}
          toggleDisplay={props.toggleDisplay}
          onClick={() => props.toggleDisplay(props.keyNr, true)}
        />
      )}
    </Card>
  );
}

export default Note;
