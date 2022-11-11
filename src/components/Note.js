import { createRef, useEffect, useState } from "react";
import DisplayNote from "./DisplayNote";
// import Card from "@mui/material/Card";
// import Box from "@mui/material/Box";
import NoteTextfield from "./NoteTextfield";
import { Card, Box } from "@mui/material";

function Note(props) {
  const [initialized, setInitialized] = useState(false);
  const [cardHeight, setCardHeight] = useState(194);

  let card = createRef();

  useEffect(() => {
    !initialized &&
      !props.data.canEdit &&
      window.scrollTo(0, card.current.offsetTop);
    setInitialized(true);
  }, [initialized, card, props.data.canEdit]);

  useEffect(() => {
    !props.data.canEdit && setCardHeight(card.current.clientHeight);
  }, [cardHeight, card, props.data.canEdit]);

  return (
    <Box my={2} display="flex" flexDirection="column">
      <Card
        ref={card}
        style={{
          minHeight: props.data.canEdit ? cardHeight + "px" : "194px",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
