"use strict";

console.log("app.js is running!");

// Setting up a form
var appInfo = {
  title: "Application Title",
  subtitle: "Application Subtitle",
  options: []
};
var getOptions = function getOptions(subtitle) {
  return subtitle && appInfo.options.length > 0 ? "Here are your options" : "No options available";
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

var initialiseRerender = function initialiseRerender() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      appInfo.title
    ),
    appInfo.subtitle && React.createElement(
      "p",
      null,
      appInfo.subtitle
    ),
    React.createElement(
      "button",
      { onClick: removeItems },
      "Remove all"
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
      ),
      React.createElement(
        "p",
        null,
        appInfo.options.length
      )
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option", placeholder: "Enter information here..." }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");
initialiseRerender();
