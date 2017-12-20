import React, { Component } from 'react';
import { View } from 'react-native';
import NavBar from './NavBar';

class Router extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavBar />
        <View style={{ flex: 9 }}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default Router;
