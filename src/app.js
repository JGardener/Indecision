console.log("app.js is running!");

// JSX - Javascript XML
// A Javascript language extension provided by React - defines templates and injects data
// into those templates. JSX makes it easy to work with those templates.

var template = (
  <div>
    <h2>
      This is coming from src/app.js - it is then being compiled by 
      <br/>
      public/scripts/app.js into vanilla JS for the browser to read.
    </h2>
    <p>This is some extra information</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);