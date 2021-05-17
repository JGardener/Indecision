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

const app = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
)

ReactDOM.render(app, document.getElementById('app'))