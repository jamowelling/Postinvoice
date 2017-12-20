import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class NavBar extends Component <{}> {
  determineIcon = (name) => {
    return <Icon name={name} size={30} color="#222" />;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          {this.determineIcon('bars')}
        </View>
        <View style={styles.titleWrapper}>
          <Text>Title</Text>
        </View>
        <View style={styles.button}>
          {this.determineIcon('plus')}
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#eee',
  },
  button: {
    padding: 15,
  }
};

export default NavBar;
