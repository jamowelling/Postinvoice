import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SelectDateScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'cancel') {
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
