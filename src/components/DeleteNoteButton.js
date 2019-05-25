import React from "react";

function DeleteNoteButton(props) {
  return (
    <button
      key={props.keyNr}
      name="deleteNote"
      onClick={event => props.handleSubmit(event, props.keyNr)}
    >
      Delete Note
    </button>
  );
}

export default DeleteNoteButton;
