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
          title: "",
          body: ""
        }
      ]
    };
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
    const index = this.state.notes.length
    let newNote = {
      key: index,
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

  componentWillMount() {
    localStorage.getItem('notes') && this.setState({
      notes: JSON.parse(localStorage.getItem('notes'))
    })
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('notes', JSON.stringify(nextState.notes));
  }

  render() {
    const notes = this.state.notes.map((note, index) => {
      return (
        <Note
          key={index}
          keyNr={index}
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
