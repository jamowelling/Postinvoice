import React, { Component } from 'react';
import {
} from 'react-native';

import Router from './Router';
import HomeScreen from './screens/HomeScreen';

export default class App extends Component<{}> {
  render() {
    return (
        <Router>
          <HomeScreen primary />
        </Router>
    );
  }
}
