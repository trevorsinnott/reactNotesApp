import React, { useEffect } from "react";
import DisplayNote from "./DisplayNote";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import NoteTextfield from "./NoteTextfield";

function Note(props) {
  let card = React.createRef()

  useEffect(() => {
    window.scrollTo(0, card.current.offsetTop)
  }, [])

  return (
    <Box my={2}>
      <Card ref={card}>
        {props.data.canEdit ? (
          <NoteTextfield {...props} />
        ) : (
          <DisplayNote
            {...props}
            onClick={() => props.toggleDisplay(props.keyNr, true)}
          />
        )}
      </Card>
    </Box>
  );
}

export default Note;
