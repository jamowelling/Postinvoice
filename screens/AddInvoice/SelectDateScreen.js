import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SelectDateScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      alert('pressed');
      if (event.id == 'cancel') {
        alert('Cancel button pressed');
        this.props.navigator.pop({
          animated: true,
        });
      }
    }
  }
  render() {
    return (
      <View>
        <Text>
          Select Date Screen
        </Text>
      </View>
    );
  }
}

export default SelectDateScreen;
