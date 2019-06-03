import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function DeleteNoteButton(props) {
  return (
    <button
      key={props.keyNr}
      name="deleteNote"
      onClick={event => props.handleSubmit(event, props.keyNr)}
    >
      <FontAwesomeIcon icon={faTrashAlt} size="2x" />
    </button>
  );
}

export default DeleteNoteButton;
