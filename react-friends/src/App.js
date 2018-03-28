import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PeopleList } from './PeopleList';
import { people } from './people';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentDidMount() {
    this.setState({ people });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
	<PeopleList people={this.state.people} />
        </p>
      </div>
    );
  }
}

export default App;
