import React from "react";
import ReactMarkdown from "react-markdown";

function DisplayNote(props) {
  if (props.data) {
    let title = "# " + props.data.title;
    return (
      <div onClick={event => props.toggleDisplay(props.keyNr, true)} className={props.data.canEdit ? 'hide' : 'display'}>
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
