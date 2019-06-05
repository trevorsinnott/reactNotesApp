import React from "react";
import NewNoteButton from "./NewNoteButton";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

function TopAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Notes
          </Typography>
          <NewNoteButton createNote={props.createNote} />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopAppBar;
