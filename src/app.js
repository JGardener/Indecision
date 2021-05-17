class IndecisionApp extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer.</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render(){
    return (
      <div>
        <p>Options go here.</p>
        <Option />
        <Option />
        <Option />
      </div>
    );
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>
        <p>This is an option.</p>
      </div>
    );
  }
}

class AddOption extends React.Component {
  render(){
    return (
      <div>
        <form action="#">
          <p>This is where the form gets rendered</p>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))