import React from "react";

function NewNoteButton(props) {
  return (
    <button name="newNote" onClick={props.handleSubmit}>
      New Note
    </button>
  );
}

export default NewNoteButton;
