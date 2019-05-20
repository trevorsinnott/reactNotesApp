import React from "react";
import "./App.css";
import Note from "./components/Note";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <Note
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
