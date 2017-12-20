import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends Component <{}> {

  onPress() {
    const route = this.children.props.children;
    alert(route);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', }}>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            index
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            show
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onPress} style={styles.button} >
          <Text>
            create
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#be4',
    margin: 25,
    padding: 25,
  },
};

export default HomeScreen;
