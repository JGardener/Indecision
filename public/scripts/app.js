"use strict";

console.log("app.js is running!");

// JSX - Javascript XML
// A Javascript language extension provided by React - defines templates and injects data
// into those templates. JSX makes it easy to work with those templates.

var appInfo = {
  title: "Application Title",
  subtitle: "Application Subtitle",
  options: ["One", "Two"]
};

var getSubtitle = function getSubtitle(subtitle) {
  return subtitle && appInfo.options.length > 0 ? React.createElement(
    "p",
    null,
    "Here are your options"
  ) : React.createElement(
    "p",
    null,
    "No options"
  );
};

// ====================================================
// Basics of Rendering
// - Adding features together through conditional 
//   rendering.
// 
// ====================================================

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h2",
    null,
    appInfo.title
  ),
  getSubtitle(appInfo.subtitle),
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
var getName = function getName(name) {
  return name ? React.createElement(
    "p",
    null,
    "Name: ",
    name
  ) : React.createElement(
    "p",
    null,
    "Anonymous"
  );
};
var getAge = function getAge(age) {
  return age && age >= 18 ? React.createElement(
    "p",
    null,
    "Age: ",
    age
  ) : undefined;
};
var getLocation = function getLocation(location) {
  return React.createElement(
    "p",
    null,
    "Location: ",
    location
  );
};

var templateTwo = React.createElement(
  "div",
  null,
  getName(user.name),
  getAge(user.age),
  getLocation(user.location)
);

// Challenge
var getFirstName = function getFirstName(name) {
  return console.log(name.split(' ')[0]);
};
getFirstName("Mike Smith");

// Challenge
var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return _this.multiplyBy * number;
    });
  }
};

// =============================================
//  Events + Data Binding
//  
//
// =============================================

// Challenge 
// Make a button called -1 - setup minus one function and register as onClick handler
// return a console log with the count having been reduced by one. 
// Make a second button called reset - set the reset function to return count as reset to 0.
var count = 0;
var addOne = function addOne() {
  return console.log(count += 1);
};
var minusOne = function minusOne() {
  return console.log(count -= 1);
};
var resetCount = function resetCount() {
  console.log("Count reset successfully");count = 0;
};
var templateThree = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: resetCount },
    "Reset"
  )
);

console.log(multiplier.multiply());
var appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
// ReactDOM.render(templateTwo, appRoot);
