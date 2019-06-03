import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'

function NewNoteButton(props) {
  return (
    <button name="newNote" onClick={props.handleSubmit}>
      <FontAwesomeIcon icon={faPlusSquare} size="2x"/>
    </button>
  );
}

export default NewNoteButton;
