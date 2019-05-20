import React from "react";

function Note(props) {
  return (
    <div>
      <form onBlur={props.handleSubmit}>
        <label name="createdAt" htmlFor="noteTitle">
          Created:{" "}
          <time dateTime={props.data.createdAt}>{props.data.createdAt}</time>
        </label>
        <br />
        <input
          name="noteTitle"
          value={props.data.noteTitle}
          type="text"
          onChange={props.handleChange}
        />
        <br />
        <textarea
          name="noteContent"
          value={props.data.noteContent}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}

export default Note;
