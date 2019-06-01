import React from "react";
import ReactMarkdown from "react-markdown";

function DisplayNote(props) {
  if (props.data) {
    return (
      <div onClick={event => {props.onClick(event)}} className={props.data.canEdit ? 'hide' : 'display'}>
        <label name="created" htmlFor="title">
          Created:{" "}
          <time dateTime={props.data.created}>{props.data.created}</time>
        </label>
        <hr />
        <ReactMarkdown source={props.data.body} />
      </div>
    );
  } else {
    return null;
  }
}

export default DisplayNote;
