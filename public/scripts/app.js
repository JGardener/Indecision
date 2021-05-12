console.log("app.js is running!");

// JSX - Javascript XML
// A Javascript language extension provided by React - defines templates and injects data
// into those templates. JSX makes it easy to work with those templates.

// var template = <p>This is JSX from app.js</p>;

var template = React.createElement("p", null, "Hello!");
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);