import React, {Component} from 'react';
import axios from 'axios'
import Header from 'semantic-ui-react/dist/commonjs/elements/Header/Header';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import 'semantic-ui-css/semantic.min.css'
import List from 'semantic-ui-react/dist/commonjs/elements/List/List';
import { IActivity } from '../models/activity';

interface IState {
  activities: IActivity[];
}

class App extends Component<{}, IState> {
  // When the app first loads, the state is empty
  readonly state: IState = {
    activities: []
  }

  // We then set the state to an array of two objects
  componentDidMount() {
    axios.get<IActivity[]>("http://localhost:5000/api/activities").then((response) => {
      console.log(response);
      this.setState({
        activities: response.data
      });
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
          {this.state.activities.map((activities) => (
            <List.Item key={activities.id}>{activities.title}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
