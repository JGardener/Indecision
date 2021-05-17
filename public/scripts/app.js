"use strict";

console.log("app.js is running!");

// Setting up a form
var appInfo = {
  title: "Indecision",
  subtitle: "Application Subtitle",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  // preventDefault() stops the form from re-rendering the page.
  e.preventDefault();

  // e is the whole object
  // target is the element that the event started on - in this case, the form
  // form has access to elements, which has a list of elements in the form - listed by name
  // This is why we called the input element "option"
  // option has a value - the text typed into it before form submission by clicking the button
  var option = e.target.elements.option.value;

  // If the input field has text in it on form submission, then add that text to the options array
  // Then, clear the text input, ready for another value to be added.
  if (option) {
    appInfo.options.push(option);
    e.target.elements.option.value = "";
    initialiseRerender();
  }
};

var removeItems = function removeItems() {
  appInfo.options = [];
  initialiseRerender();
};

var makeDecision = function makeDecision() {
  var randomNumber = Math.floor(Math.random() * appInfo.options.length);
  var decision = appInfo.options[randomNumber];
  return alert(decision);
};

var initialiseRerender = function initialiseRerender() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      appInfo.title
    ),
    appInfo.options.length > 0 ? React.createElement(
      "p",
      null,
      "Here are your options"
    ) : React.createElement(
      "p",
      null,
      "No options available"
    ),
    React.createElement(
      "button",
      { disabled: appInfo.options.length == 0, onClick: makeDecision },
      "What should I do?"
    ),
    React.createElement(
      "ol",
      null,
      appInfo.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option", placeholder: "Enter information here..." }),
      React.createElement(
        "button",
        null,
        "Add Option"
      ),
      React.createElement(
        "button",
        { onClick: removeItems },
        "Remove all"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
initialiseRerender();
