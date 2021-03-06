class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDecision = this.handleDecision.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ["One","Two","Four"]
    }
  }

  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      }
    })
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
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      };
    });
  }
  render(){
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action options={this.state.options} handleDecision={this.handleDecision}/>
        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions}/>
        <AddOption handleAddOption={this.handleAddOption}/>
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button 
        disabled={this.props.options.length == 0}
        onClick={this.props.handleDecision}
        >
          What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
        <p>Array length: {this.props.options.length}</p>
        {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
        <p>Option: {this.props.optionText}</p>        
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    this.props.handleAddOption(option);
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return {
        error: error
      }
    })
  }
  render(){
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));