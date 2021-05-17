console.log("app.js is running!");

// Setting up a form
const appInfo = {
  title: "Indecision",
  subtitle: "Application Subtitle",
  options: []
}

const onFormSubmit = (e) => {
  // preventDefault() stops the form from re-rendering the page.
  e.preventDefault();
    
  // e is the whole object
  // target is the element that the event started on - in this case, the form
  // form has access to elements, which has a list of elements in the form - listed by name
  // This is why we called the input element "option"
  // option has a value - the text typed into it before form submission by clicking the button
  const option = e.target.elements.option.value;
  
  // If the input field has text in it on form submission, then add that text to the options array
  // Then, clear the text input, ready for another value to be added.
  if(option){
    appInfo.options.push(option);
    e.target.elements.option.value = "";
    initialiseRerender();
  }
  
} 

const removeItems = () =>{
  appInfo.options = [];
  initialiseRerender();
};

const makeDecision = () => {
const randomNumber = Math.floor(Math.random() * appInfo.options.length);
const decision = appInfo.options[randomNumber];
return alert(decision);
}


const initialiseRerender = () => {
  const template = (
    <div>
      <h1>{appInfo.title}</h1>
      {appInfo.options.length > 0 ? <p>Here are your options</p> : <p>No options available</p>}
      <button disabled={appInfo.options.length == 0} onClick={makeDecision}>What should I do?</button>
      <ol>
        {/* This line is possible due to the formSubmit function above. */}
        {appInfo.options.map((option) => <li key={option}>{option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" placeholder="Enter information here..."/>
        <button>Add Option</button>
      <button onClick={removeItems}>Remove all</button>
      </form>
    </div>
  )
  
  ReactDOM.render(template, appRoot);
  
}

const appRoot = document.getElementById("app");
initialiseRerender();