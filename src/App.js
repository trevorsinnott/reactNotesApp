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
        }
      ],
      noteContent: "Filler content",
      noteTitle: "My note",
      createdAt: new Date().toLocaleDateString()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const { name } = event.target;
    if (name === "newNote") {
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
  }

  render() {
    const notes = this.state.notes.map((note, index)=> {
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