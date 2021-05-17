class IndecisionApp extends React.Component {
  render(){
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["One", "Two", "Four"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
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
  handlePick () {
    alert("handlePick")
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  handleRemoveAll () {
    alert("This removed all the options");
  }
  render(){
    return (
      <div>
        <p>Array length: {this.props.options.length}</p>
        {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option){
      alert(option);
      e.target.elements.option.value = "";
    }
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))