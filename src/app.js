import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));

/*
class OldSyntax {
  constructor(){
    this.name = "Mike"
  }
  getGreeting() {
    return "Hi. My name is ${this.name}"
  }
}

 const oldSyntax = new OldSyntax();
 const getGreeting = oldSyntax.getGreeting();
 console.log(getGreeting());
 This won't work, because we haven't bound this! How annoying!



class NewSyntax {
  name = "Terence";
  getGreeting = () => `Hi. My name is ${this.name}`
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting();
console.log(newGetGreeting);


Notice that with the new syntax, thanks to
babel-plugin-transform-class-properties, we are now able to type
out a class without using the constructor! Huzzah!
*/
