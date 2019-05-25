import React from "react";
import DeleteNoteButton from "./DeleteNoteButton";
import DisplayNote from "./DisplayNote";

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
          key={props.data.key}
          value={props.data.title}
          type="text"
          onChange={event => props.handleChange(event, props.keyNr)}
        />
        <br />
        <textarea
          name="body"
          value={props.data.body}
          onChange={event => {
            props.handleChange(event, props.keyNr);
          }}
        />
        <DeleteNoteButton
          handleSubmit={props.handleSubmit}
          keyNr={props.keyNr}
        />
      </form>
      <DisplayNote data={props.data} />
    </div>
  );
}

export default Note;
