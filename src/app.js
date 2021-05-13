console.log("app.js is running!");

// JSX - Javascript XML
// A Javascript language extension provided by React - defines templates and injects data
// into those templates. JSX makes it easy to work with those templates.

var appInfo = {
  title: "Application Title",
  subtitle: "Application Subtitle",
  options: ["One", "Two"]
}

const getSubtitle = (subtitle) => subtitle && appInfo.options.length > 0 ? <p>{"Here are your options"}</p> : <p>{"No options"}</p>


var template = (
  <div>
    <h2>
      {appInfo.title}
    </h2>
    <p>{getSubtitle(appInfo.subtitle)}</p>
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
const getName = (name) => name ? <p>Name: {name}</p> : <p>{"Anonymous"}</p>;
const getAge = (age) => age && age >= 18 ? <p>Age: {age}</p> : undefined;
const getLocation = (location) => <p>Location: {location}</p>;

var templateTwo = (
  <div>
    {getName(user.name)}
    {getAge(user.age)}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(templateTwo, appRoot);