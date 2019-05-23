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
          created: new Date().toLocaleDateString(),
          title: "Test Note",
          body: "Some stuff"
        },
        {
          created: new Date().toLocaleDateString(),
          title: "Second Note",
          body: "More stuff"
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, key) => {
    const { name, value } = event.target;
    const newState = this.state.notes.map((note, index) => {
      return index === key ? { ...note, [name]: value } : note;
    });
    this.setState({ notes: newState });
  };

  handleSubmit = event => {
    event.preventDefault();
    let newNote = {
      created: new Date().toLocaleDateString(),
      title: "",
      body: ""
    };
    this.setState(prevState => {
      return {
        notes: prevState.notes.concat(newNote)
      };
    });
  };

  render() {
    const notes = this.state.notes.map((note, index) => {
      return (
        <Note
          key={index}
          data={note}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    });
    return (
      <div>
        <NewNoteButton handleSubmit={this.handleSubmit} />
        <br />
        {notes}
      </div>
    );
  }
}

export default App;
