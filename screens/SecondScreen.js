import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SecondScreen extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Postinvoice</Text>
      </View>
    );
  }
}

export default SecondScreen;
