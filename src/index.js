import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// 1. Notes App
// Tier: 1 — Beginner
//
// https://medium.freecodecamp.org/here-are-some-app-ideas-you-can-build-to-level-up-your-coding-skills-39618291f672
//
// Description: Create and store your notes for a later purpose!
//
// User Stories
//  - User can create a note
//  - User can edit a note
//  - User can delete a note
//  - When closing the browser window the notes will be stored and when the User returns, the data will be retrieved
// Bonus features
//  - User can create and edit a note in Markdown format. On save it will convert Markdown to HTML
//  - User can see the date when he created the note
// Useful links and resources
//  - localStorage
//  - Markdown Guide
//  - Marked — A markdown parser
serviceWorker.unregister();
