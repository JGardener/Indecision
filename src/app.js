class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }
  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  };
  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  };
  handleReset(){
    this.setState(() => {
      return {
        count: 0
      }
    });
  };
  render(){
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

class VisibilityToggle extends React.Component {
  constructor(props){
    super(props);
    this.handleToggleInvisibility = this.handleToggleInvisibility.bind(this);
    this.state = {
      visibility: false
    }
  }
  handleToggleInvisibility(){
    this.setState((prevState) => {
      return {
          visibility: !prevState.visibility    
      }});
    }  
  render(){
    return (
      <div>
        <button onClick={this.handleToggleInvisibility}>Toggle Details</button>
        {console.log(this.state.visibility)}
        <p>{!!this.state.visibility && this.props.text}</p>

      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle text={"These are some details!"}/>, document.getElementById('app'));