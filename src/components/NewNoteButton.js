import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function NewNoteButton(props) {
  return (
    <button
      name="newNote"
      onClick={event => {
        props.handleSubmit(event);
      }}
    >
      <FontAwesomeIcon icon={faPlusSquare} size="2x" className="newNote" />
    </button>
  );
}

export default NewNoteButton;
