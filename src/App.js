import React from "react";
import "./App.css";
import Note from "./components/Note";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import TopAppBar from "./components/TopAppBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          key: 0,
          created: new Date().toLocaleDateString(),
          body:
            "# First Note\n\n## Click on a note to edit!\n\n### This note can be formatted using Markdown. You can:\n- Make lists\n- Link to cool sites like [Material Ui](https://material-ui.com/)\n- Make your text:\n  1. *Exciting* or\n  2. **Eye catching**\n\n\nOr you can just write down what you're thinking before you forget.\n\nEnjoy!",
          canEdit: false
        }
      ],
      id: 1
    };
  }

  handleChange = (event, key) => {
    const { name, value } = event.target;
    const newState = this.state.notes.map(note => {
      return note.key === key ? { ...note, [name]: value } : note;
    });
    this.setState({ notes: newState });
  };

  updateId() {
    this.setState(prevState => {
      return { id: Number(prevState.id) + 1 };
    });
  }

  handleSubmit = (event, key) => {
    event.preventDefault();
    const name = event.currentTarget.name;
    if (name === "newNote") {
      let newNote = this.newNote();
      this.setState(prevState => {
        return {
          notes: prevState.notes.concat(newNote)
        };
      });
    } else {
      let updatedNotes = this.state.notes.filter(note => {
        return note.key !== key;
      });
      this.setState({ notes: updatedNotes });
    }
  };

  toggleDisplay = (event, key, display) => {
    event.preventDefault()
    let updatedNotes = this.state.notes.map(note => {
      return note.key === key ? { ...note, canEdit: display } : note;
    });
    this.setState({ notes: updatedNotes });
  };

  newNote() {
    const noteKey = this.state.id;
    this.updateId();
    return {
      key: noteKey,
      created: new Date().toLocaleDateString(),
      body: "# New Note",
      canEdit: false
    };
  }
  componentWillMount() {
    let notes = JSON.parse(localStorage.getItem("notes"));
    let id = localStorage.getItem("id");
    notes &&
      this.setState({
        notes: notes,
        id: id
      });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("notes", JSON.stringify(nextState.notes));
    localStorage.setItem("id", nextState.id);
  }

  render() {
    const notes = this.state.notes.map((note, index) => {
      return index === 0 ? (
        <div key={note.key}>
          <Note
            keyNr={note.key}
            data={note}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            toggleDisplay={this.toggleDisplay}
          />
        </div>
      ) : (
        <div key={note.key}>
          <Divider />
          <Note
            keyNr={note.key}
            data={note}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            toggleDisplay={this.toggleDisplay}
          />
        </div>
      );
    });
    return (
      <React.Fragment>
        <CssBaseline />
        <TopAppBar createNote={this.handleSubmit} />
        <Toolbar />
        <Container maxWidth="md">
          <Box my={2}>{notes}</Box>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
