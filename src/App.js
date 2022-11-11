import { Fragment, useEffect, useState } from "react";
import "./App.css";
import Note from "./components/Note";
// import Container from "@mui/material/Container";
import {
  Divider,
  Container,
  Toolbar,
  CssBaseline,
  Box,
} from "@material-ui/core";
// import Divider from "@mui/material/Divider";
// import Toolbar from "@mui/material/Toolbar";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
import TopAppBar from "./components/TopAppBar";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       notes: [
//         {
//           key: 0,
//           created: new Date().toLocaleDateString(),
//           body: "# First Note\n\n## Click on a note to edit!\n\n### This note can be formatted using Markdown. You can:\n- Make lists\n- Link to cool sites like [Material Ui](https://material-ui.com/)\n- Make your text:\n  1. *Exciting* or\n  2. **Eye catching**\n\n\nOr you can just write down what you're thinking before you forget.\n\nEnjoy!",
//           canEdit: false,
//         },
//       ],
//       id: 1,
//     };
//   }

//   handleChange = (event, key) => {
//     const { name, value } = event.target;
//     const newState = this.state.notes.map((note) => {
//       return note.key === key ? { ...note, [name]: value } : note;
//     });
//     this.setState({ notes: newState });
//   };

//   updateId() {
//     this.setState((prevState) => {
//       return { id: Number(prevState.id) + 1 };
//     });
//   }

//   handleSubmit = (event, key) => {
//     event.preventDefault();
//     const name = event.currentTarget.name;
//     if (name === "newNote") {
//       let newNote = this.newNote();
//       this.setState((prevState) => {
//         return {
//           notes: prevState.notes.concat(newNote),
//         };
//       });
//     } else {
//       let updatedNotes = this.state.notes.filter((note) => {
//         return note.key !== key;
//       });
//       this.setState({ notes: updatedNotes });
//     }
//   };

//   toggleDisplay = (event, key, display) => {
//     event.preventDefault();
//     let updatedNotes = this.state.notes.map((note) => {
//       return note.key === key ? { ...note, canEdit: display } : note;
//     });
//     this.setState({ notes: updatedNotes });
//   };

//   newNote() {
//     const noteKey = this.state.id;
//     this.updateId();
//     return {
//       key: noteKey,
//       created: new Date().toLocaleDateString(),
//       body: "# New Note",
//       canEdit: false,
//     };
//   }
//   UNSAFE_componentWillMount() {
//     let notes = JSON.parse(localStorage.getItem("notes"));
//     let id = localStorage.getItem("id");
//     notes &&
//       this.setState({
//         notes: notes,
//         id: id,
//       });
//   }

//   UNSAFE_componentWillUpdate(nextProps, nextState) {
// localStorage.setItem("notes", JSON.stringify(nextState.notes));
// localStorage.setItem("id", nextState.id);
//   }

//   render() {
//     const notes = this.state.notes.map((note, index) => {
//       return index === 0 ? (
//         <div key={note.key}>
//           <Note
//             keyNr={note.key}
//             data={note}
//             handleChange={this.handleChange}
//             handleSubmit={this.handleSubmit}
//             toggleDisplay={this.toggleDisplay}
//           />
//         </div>
//       ) : (
//         <div key={note.key}>
//           <Divider />
//           <Note
//             keyNr={note.key}
//             data={note}
//             handleChange={this.handleChange}
//             handleSubmit={this.handleSubmit}
//             toggleDisplay={this.toggleDisplay}
//           />
//         </div>
//       );
//     });
//     return (
//       <Fragment>
//         <CssBaseline />
//         <TopAppBar createNote={this.handleSubmit} />
//         <Toolbar />
//         <Container maxWidth="md">
//           <Box my={2}>{notes}</Box>
//         </Container>
//       </Fragment>
//     );
//   }
// }

// export default App;

export default function App(params) {
  const [notes, setNotes] = useState([
    {
      key: 0,
      created: new Date().toLocaleDateString(),
      body: "# First Note\n\n## Click on a note to edit!\n\n### This note can be formatted using Markdown. You can:\n- Make lists\n- Link to cool sites like [Material Ui](https://material-ui.com/)\n- Make your text:\n  1. *Exciting* or\n  2. **Eye catching**\n\n\nOr you can just write down what you're thinking before you forget.\n\nEnjoy!",
      canEdit: false,
    },
  ]);

  const [id, setId] = useState(1);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    const savedId = localStorage.getItem("id");

    setNotes(savedNotes);
    setId(savedId);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("id", id);
  }, [notes, id]);

  function handleSubmit(event, key) {
    event.preventDefault();
    const name = event.currentTarget.name;

    if (name === "newNote") {
      const newNote = {
        key: id,
        created: new Date().toLocaleDateString(),
        body: "# New Note",
        canEdit: false,
      };
      setId(id + 1);
      setNotes(notes.concat(newNote));
    } else {
      let updatedNotes = notes.filter((note) => {
        return note.key !== key;
      });
      setNotes(updatedNotes);
    }
  }

  function handleChange(event, key) {
    const { name, value } = event.target;
    const newNotes = notes.map((note) => {
      return note.key === key ? { ...note, [name]: value } : note;
    });
    setNotes(newNotes);
  }

  function toggleDisplay(event, key, display) {
    event.preventDefault();
    let updatedNotes = notes.map((note) => {
      return note.key === key ? { ...note, canEdit: display } : note;
    });
    setNotes(updatedNotes);
  }

  const currentNotes = notes.map((note, index) => {
    return index === 0 ? (
      <div key={note.key}>
        <Note
          keyNr={note.key}
          data={note}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleDisplay={toggleDisplay}
        />
      </div>
    ) : (
      <div key={note.key}>
        <Divider />
        <Note
          keyNr={note.key}
          data={note}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          toggleDisplay={toggleDisplay}
        />
      </div>
    );
  });

  return (
    <Fragment>
      <CssBaseline />
      <TopAppBar createNote={handleSubmit} />
      <Toolbar />
      <Container maxWidth="md">
        <Box my={2}>{currentNotes}</Box>
      </Container>
    </Fragment>
  );
}
