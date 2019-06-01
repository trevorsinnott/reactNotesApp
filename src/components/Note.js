import React, { useEffect } from "react";
import DeleteNoteButton from "./DeleteNoteButton";
import DisplayNote from "./DisplayNote";

function Note(props) {

  function onClick() {
    props.toggleDisplay(props.keyNr, true);
  }

  useEffect(() => {
    props.data.canEdit && props.textAreaRef.current.focus()
  })

  return (
    <div className="note">
      <form
        className={props.data.canEdit ? "display" : "hide"}
        onBlur={() => props.toggleDisplay(props.keyNr, false)}
      >
        <label name="created" htmlFor="title">
          Created:{" "}
          <time dateTime={props.data.created}>{props.data.created}</time>
        </label>
        <hr />
        <textarea
          ref={props.textAreaRef}
          onClick={onClick}
          name="body"
          value={props.data.body}
          onChange={event => {
            props.handleChange(event, props.keyNr);
          }}
        />
      </form>
      <DisplayNote
        data={props.data}
        keyNr={props.keyNr}
        toggleDisplay={props.toggleDisplay}
        onClick={() => onClick()}
      />
      
      <DeleteNoteButton
          handleSubmit={props.handleSubmit}
          keyNr={props.keyNr}
        />
    </div>
  );
}

export default Note;
