console.log("app.js is running!");

// JSX - Javascript XML
// A Javascript language extension provided by React - defines templates and injects data
// into those templates. JSX makes it easy to work with those templates.

var textObject = {
  title: "Application Title",
  subtitle: "Application Subtitle"
}

var template = (
  <div>
    <h2>
      {textObject.title}
    </h2>
    <p>{textObject.subtitle}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

var user = {
  name: "James Gardener",
  age: 28,
  location: "England"
};

var templateTwo = (
  <div>
    <h1>Name: {user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);