import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Router extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>NavBar</Text>
        </View>
        <View style={{ flex: 9 }}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

export default Router;
