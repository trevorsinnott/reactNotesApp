import React from "react";

function Note(props) {
  return (
    <div>
      <form>
        <label name="created" htmlFor="title">
          Created:{" "}
          <time dateTime={props.data.created}>{props.data.created}</time>
        </label>
        <br />
        <input
          name="title"
          value={props.data.title}
          type="text"
          onChange={props.handleChange}
        />
        <br />
        <textarea
          name="body"
          value={props.data.body}
          onChange={props.handleChange}
        />
      </form>
    </div>
  );
}

export default Note;
