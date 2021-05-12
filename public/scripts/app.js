"use strict";

console.log("app.js is running!");

// JSX - Javascript XML
// A Javascript language extension provided by React - defines templates and injects data
// into those templates. JSX makes it easy to work with those templates.

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    "This is coming from src/app.js - it is then being compiled by",
    React.createElement("br", null),
    "public/scripts/app.js into vanilla JS for the browser to read."
  ),
  React.createElement(
    "p",
    null,
    "This is some extra information"
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item One"
    ),
    React.createElement(
      "li",
      null,
      "Item Two"
    )
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
