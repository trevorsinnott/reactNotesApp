import React from "react";
import ReactMarkdown from "react-markdown";

function DisplayNote(props) {
  if (props.data) {
    let title = "# " + props.data.title;
    return (
      <div>
        <ReactMarkdown source={title} />
        <ReactMarkdown source={props.data.body} />
      </div>
    );
  } else {
    return null;
  }
}

export default DisplayNote;
