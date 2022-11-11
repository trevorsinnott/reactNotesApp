import { Button } from "@mui/material";

function EditNoteButton(props) {
  return (
    <Button
      variant="contained"
      size="small"
      onClick={(event) => {
        props.onClick(event);
      }}
    >
      Edit
    </Button>
  );
}

export default EditNoteButton;
