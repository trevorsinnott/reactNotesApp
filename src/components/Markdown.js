import ReactMarkdown from "markdown-to-jsx";
import { styled } from '@mui/material/styles';
// import withStyles from '@mui/styles/withStyles';
// import Typography from "@mui/material/Typography";
// import Link from "@mui/material/Link";
import { Typography, Link } from "@mui/material";

const PREFIX = 'Markdown';

const classes = {
  listItem: `${PREFIX}-listItem`
};

const StyledReactMarkdown = styled(ReactMarkdown)((
  {
    theme
  }
) => ({
  [`& .${classes.listItem}`]: {
    marginTop: theme.spacing(1),
  }
}));

const options = {
  overrides: {
    h1: {
      component: (props) => <Typography gutterBottom variant="h4" {...props} />,
    },
    h2: {
      component: (props) => <Typography gutterBottom variant="h6" {...props} />,
    },
    h3: {
      component: (props) => (
        <Typography gutterBottom variant="subtitle1" {...props} />
      ),
    },
    h4: {
      component: (props) => (
        <Typography gutterBottom variant="caption" paragraph {...props} />
      ),
    },
    p: { component: (props) => <Typography paragraph {...props} /> },
    a: { component: Link },
    li: {
      component: (({  ...props }) => (
        <li className={classes.listItem}>
          <Typography component="span" {...props} />
        </li>
      )),
    },
  },
};

export default function Markdown(props) {
  return <StyledReactMarkdown options={options} {...props} />;
}
