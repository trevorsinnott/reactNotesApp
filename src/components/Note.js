import React from "react";
import DeleteNoteButton from "./DeleteNoteButton";
import DisplayNote from "./DisplayNote";

function Note(props) {
  return (
    <div className="note">
      <form className={props.data.canEdit ? 'display' : 'hide'} onBlur={() => props.toggleDisplay(props.keyNr, false)}>
        <label name="created" htmlFor="title">
          Created:{" "}
          <time dateTime={props.data.created}>{props.data.created}</time>
        </label>
        <hr />
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
      <DisplayNote data={props.data} keyNr={props.keyNr} toggleDisplay={props.toggleDisplay}/>
    </div>
  );
}

export default Note;
