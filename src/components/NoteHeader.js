import { CardHeader } from "@mui/material";

function NoteHeader(props) {
  return (
    <CardHeader subheader={props.data.created}>
      <span name="created" htmlFor="title">
        Created: <time dateTime={props.data.created}>{props.data.created}</time>
      </span>
    </CardHeader>
  );
}

export default NoteHeader;
