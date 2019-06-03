import React from "react";
import ReactMarkdown from "react-markdown";

function DisplayNote(props) {
  if (props.data) {
    return (
      <div onClick={event => {props.onClick(event)}} className={props.data.canEdit ? 'hide' : 'display'}>
        <hr />
        <ReactMarkdown source={props.data.body} />
      </div>
    );
  } else {
    return null;
  }
}

export default DisplayNote;
