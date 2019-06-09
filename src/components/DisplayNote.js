import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Markdown from "./Markdown";
import NoteHeader from "./NoteHeader";
import { Divider, CardActionArea, CardActions } from "@material-ui/core";
import DeleteNoteButton from "./DeleteNoteButton";
import EditNoteButton from "./EditNoteButton";

function DisplayNote(props) {
  if (props.data) {
    return (
      <>
        <CardActionArea
          onClick={event => {
            props.onClick(event);
          }}
          style={{
            flexGrow: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <NoteHeader {...props} />
          <CardContent style={{ flexGrow: "1" }}>
            <Markdown>{props.data.body}</Markdown>
          </CardContent>
        </CardActionArea>
        <Divider />
        <CardActions>
          <EditNoteButton
            onClick={event => {
              props.onClick(event);
            }}
          />
          <DeleteNoteButton {...props} />
        </CardActions>
      </>
    );
  } else {
    return null;
  }
}

export default DisplayNote;
