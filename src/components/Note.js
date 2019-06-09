import React, { useEffect, useState } from "react";
import DisplayNote from "./DisplayNote";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import NoteTextfield from "./NoteTextfield";

function Note(props) {
  const [initialized, setInitialized] = useState(false);
  const [cardHeight, setCardHeight] = useState(null)

  let card = React.createRef();

  useEffect(() => {
    !initialized && window.scrollTo(0, card.current.offsetTop);
    setInitialized(true);
  }, [initialized, card]);

  useEffect(() => {
    !props.data.canEdit && setCardHeight(card.current.clientHeight)
  }, [cardHeight, card, props.data.canEdit])

  return (
    <Box my={2} display="flex" flexDirection="column">
      <Card ref={card} style={{minHeight: cardHeight + "px"}}>
        {props.data.canEdit ? (
          <NoteTextfield {...props} />
        ) : (
          <DisplayNote
            {...props}
            onClick={(event) => props.toggleDisplay(event, props.keyNr, true)}
          />
        )}
      </Card>
    </Box>
  );
}

export default Note;
