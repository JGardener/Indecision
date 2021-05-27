import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import Option from './components/Option';

class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    }
  }
  
  // Shows when a component gets rendered to the page for the first time.
  componentDidMount(){
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json);
      if(options){
        this.setState(() => ({options}));
      }
    } catch (e) {
      // Do nothing at all!
    }
  }

  // Shows when a components props or state updates.
  // Useful for figuring out when component data changed.
  // Has access to the previous props and previous states.
  componentDidUpdate(prevProps, prevState){
    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json)
      console.log("You updated data")
    }
  }

  // Shows when a component gets removed from the DOM.
  // There's usually not much use for this function, but it's useful to know.
  componentWillUnmount(){
    console.log("Component will unmount")
  }

  handleDeleteOptions(){
    this.setState(() => ({ options: [] }))
  }


  handleDecision(){
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const decision = this.state.options[randomNumber];
    return alert(decision);
  }

  handleAddOption(option){
    // Some error messages for the user, just in case.
    // If there was no text in the first place. option comes out as false
    if(!option){
      return "Please enter a valid value to add item";
    // If the option already exists in the array. indexOf(option) > -1 means the item exists in the array 
    } else if (this.state.options.indexOf(option) > -1){
      return "This option already exists";
    } 
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }

  handleDeleteOption(optionToRemove){
    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option )}));
  }

  render(){
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header 
        subtitle={subtitle} 
        />
        <Action 
        options={this.state.options} 
        handleDecision={this.handleDecision}
        />
        
        <Options 
        options={this.state.options} 
        handleDeleteOptions={this.handleDeleteOptions}
        handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
        handleAddOption={this.handleAddOption}
        />
     
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
