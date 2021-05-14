console.log("app.js is running!");

// JSX - Javascript XML
// A Javascript language extension provided by React - defines templates and injects data
// into those templates. JSX makes it easy to work with those templates.

const appInfo = {
  title: "Application Title",
  subtitle: "Application Subtitle",
  options: ["One", "Two"]
}

const getSubtitle = (subtitle) => subtitle && appInfo.options.length > 0 ? <p>{"Here are your options"}</p> : <p>{"No options"}</p>


// ====================================================
// 
//    Basics of Rendering
//    - Adding features together through conditional 
//      rendering.
// 
// ====================================================

const template = (
  <div>
    <h2>
      {appInfo.title}
    </h2>
    {getSubtitle(appInfo.subtitle)}
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

const user = {
  name: "James Gardener",
  age: 28,
  location: "England"
};
const getName = (name) => name ? <p>Name: {name}</p> : <p>{"Anonymous"}</p>;
const getAge = (age) => age && age >= 18 ? <p>Age: {age}</p> : undefined;
const getLocation = (location) => <p>Location: {location}</p>;

const templateTwo = (
  <div>
    {getName(user.name)}
    {getAge(user.age)}
    {getLocation(user.location)}
  </div>
);

// Challenge
const getFirstName = (name) => console.log(name.split(' ')[0]);
getFirstName("Mike Smith");


// Challenge
const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => this.multiplyBy * number ); 
  }
}

// =============================================
//
//
//
// =============================================

let count = 0;
const templateThree = (
  <div>
    <h1>Count: {count}</h1>
    <button id="my-id" className="button">+1</button>
  </div>
)



console.log(multiplier.multiply());
const appRoot = document.getElementById('app');

ReactDOM.render(templateThree, appRoot);
// ReactDOM.render(templateTwo, appRoot);