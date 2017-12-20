import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NavBar extends Component <{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftWrapper}>
          <Text>
            Back
          </Text>
        </View>
        <View style={styles.titleWrapper}>
          <Text>Title</Text>
        </View>
        <View>
          <Text>
            Right
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#eee',
  },
};

export default NavBar;
