import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // When the app first loads, the state is empty
  state = {
    values: []
  }

  // We then set the state to an array of two objects
  componentDidMount() {
    this.setState({
      values: [{id: 1, name: 'Value 101'}, {id: 2, name: 'Value 102'}]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.values.map((value: any) => (
              <li>{value.name}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
