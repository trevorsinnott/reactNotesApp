import { AppBar, Typography, Toolbar, Button, Box } from "@mui/material";
import { db } from "../db";

export default function TopAppBar({ notes, setNotes }) {
  async function handleClick(event) {
    event.preventDefault();

    const created = new Date().toLocaleDateString();
    const body = "#New Note";
    const canEdit = true;

    try {
      const key = await db.notes.add({
        created,
        body,
        canEdit,
      });

      const newNote = {
        key: key,
        created: created,
        body: body,
        canEdit: canEdit,
      };

      setNotes(notes.concat(newNote));
    } catch (error) {
      console.log("An error occured");
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Notes
          </Typography>
          <Button color="inherit" onClick={handleClick}>
            New Note
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
