import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

class SecondScreen extends Component <{}> {
  state = {
    vendorNames: [
      {
        key: 'natural',
        name: 'Natural Wine Co.',
      },
      {
        key: 'elite',
        name: 'Elite Brands',
      },
      {
        key: 'freshpack',
        name: 'Freshpack Produce',
      },
    ]
  }

  rendorVendor = ({ item }) => {
    return (
      <View key={item.key} style={styles.vendorContainer}>
        <Text style={styles.vendorTextStyle}>{item.name}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ flex: 7 }}>
          <FlatList
            style={{ flex: 1  }}
            data={this.state.vendorNames}
            renderItem={this.rendorVendor}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonStyle} >
            <Text style={{ textAlign: 'center', }}>New</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle} >
            <Text style={{ textAlign: 'center', }}>Confirm</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = {
  buttonContainer: {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'center',
    margin: 15,
    justifyContent: 'space-around',
  },
  buttonStyle: {
    minWidth: 75,
    backgroundColor: '#efeffa',
    padding: 15,
    elevation: 1,
    borderRadius: 2
  },
  vendorTextStyle: {
    fontSize: 26,
    margin: 6,
  },
  vendorContainer: {
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  }
};

export default SecondScreen;
