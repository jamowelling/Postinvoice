import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class HomeScreen extends Component <{}> {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'sideMenu') {
        alert('Menu button pressed');
      }
      if (event.id == 'add') {
        alert('Add button pressed');
      }
    }
  }

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
