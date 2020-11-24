import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import 'semantic-ui-css/semantic.min.css'
import List from 'semantic-ui-react/dist/commonjs/elements/List/List';

class App extends Component {
  // When the app first loads, the state is empty
  state = {
    values: []
  }

  // We then set the state to an array of two objects
  componentDidMount() {
    axios.get("http://localhost:5000/api/values").then((response) => {
      console.log(response);
      this.setState({
        values: response.data
      })
    });
  }

  render() {
    return (
      <div>
        <Header as='h2'>
          <Icon name='users' />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
