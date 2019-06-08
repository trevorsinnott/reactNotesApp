import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import DeleteNoteButton from "./DeleteNoteButton";

function NoteHeader(props) {
  return (
    <CardHeader
      subheader={props.data.created}
      action={
        !props.data.canEdit && (
          <DeleteNoteButton
            handleSubmit={props.handleSubmit}
            keyNr={props.keyNr}
          />
        )
      }
    >
      <span name="created" htmlFor="title">
        Created: <time dateTime={props.data.created}>{props.data.created}</time>
      </span>
    </CardHeader>
  );
}

export default NoteHeader;
