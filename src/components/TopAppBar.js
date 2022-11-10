import React from "react";
import NewNoteButton from "./NewNoteButton";
// import AppBar from "@mui/material/AppBar";
// import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";
// import makeStyles from '@mui/styles/makeStyles';
import { AppBar, Typography, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
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
