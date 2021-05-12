"use strict";

console.log("app.js is running!");

// JSX - Javascript XML
// A Javascript language extension provided by React - defines templates and injects data
// into those templates. JSX makes it easy to work with those templates.

var textObject = {
  title: "Application Title",
  subtitle: "Application Subtitle"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    textObject.title
  ),
  React.createElement(
    "p",
    null,
    textObject.subtitle
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

var user = {
  name: "James Gardener",
  age: 28,
  location: "England"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name: ",
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
