import React from "react";
import "./App.css";
import Note from "./components/Note";
import NewNoteButton from "./components/NewNoteButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          key: 0,
          created: new Date().toLocaleDateString(),
          body:
            "# First Note\n## This note can be styled with markdown!  Here's a [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).",
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

  toggleDisplay = (key, display) => {
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
    const notes = this.state.notes.map(note => {
      return (
        <div key={note.key}>
          <Note
            keyNr={note.key}
            data={note}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            toggleDisplay={this.toggleDisplay}
          />
          <hr />
        </div>
      );
    });
    return (
      <div>
        <NewNoteButton handleSubmit={this.handleSubmit} />
        <hr />
        {notes}
      </div>
    );
  }
}

export default App;
