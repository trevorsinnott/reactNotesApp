import NewNoteButton from "./NewNoteButton";
import { styled } from '@mui/material/styles';
// import AppBar from "@mui/material/AppBar";
// import Typography from "@mui/material/Typography";
// import Toolbar from "@mui/material/Toolbar";
// import makeStyles from '@mui/styles/makeStyles';
import { AppBar, Typography, Toolbar } from "@mui/material";

const PREFIX = 'TopAppBar';

const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.root}`]: {
    flexGrow: 1,
  },

  [`& .${classes.title}`]: {
    flexGrow: 1,
  }
}));

function TopAppBar(props) {

  return (
    <Root className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Notes
          </Typography>
          <NewNoteButton createNote={props.createNote} />
        </Toolbar>
      </AppBar>
    </Root>
  );
}

export default TopAppBar;
