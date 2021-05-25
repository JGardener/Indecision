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

  componentDidMount(){
    const stringCount = localStorage.getItem('count');
    const count = parseInt(stringCount, 10);

    if(!isNaN(count)){
      this.setState(() => ({count}))
    }
  }

  componentDidUpdate(prevState){
    if(prevState.count !== this.state.count){
      localStorage.setItem('count', this.state.count)
    }
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

Counter.defaultProps = {
  count: 0
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
        <button onClick={this.handleToggleInvisibility}>{this.state.visibility ? "Hide details" : "Show details"}</button>
        {console.log(this.state.visibility)}
        {this.state.visibility && (
          <div>
            <p>Here are some details!</p>
          </div>
        )}

      </div>
    )
  }
}

ReactDOM.render(<Counter /*count={-10}*//>, document.getElementById('app'));