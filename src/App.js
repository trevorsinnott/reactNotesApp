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
          title: "Test Note",
          body: "Some stuff"
        }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, key } = event.target;
    console.log(event.target)
    const newState = this.state.notes.map((note, index) => {
      return index === key ? {...note, [name]: value} : note
    })
    this.setState({ notes: newState })
  }

  handleSubmit(event) {
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
  }

  render() {
    const notes = this.state.notes.map((note, index) => {
      return (
        <Note
          key={index}
          noteKey={index}
          data={note}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    });
    return (
      <div>
        <NewNoteButton name handleSubmit={this.handleSubmit} />
        <br />
        {notes}
      </div>
    );
  }
}

export default App;
