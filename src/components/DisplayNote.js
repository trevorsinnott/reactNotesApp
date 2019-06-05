import React from "react";
import CardContent from '@material-ui/core/CardContent';
import Markdown from "./Markdown";

function DisplayNote(props) {
  if (props.data) {
    return (
      <CardContent
        onClick={event => {
          props.onClick(event);
        }}
        className={props.data.canEdit ? "hide" : "display"}
      >
          <Markdown>
            {props.data.body}
          </Markdown>

      </CardContent>
    );
  } else {
    return null;
  }
}

export default DisplayNote;
