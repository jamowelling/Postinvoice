import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TwoButtons from '../../components/TwoButtons';

class SecondScreen extends Component <{}> {
  state = {
    selectedVendor: '',
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
      {
        key: '1',
        name: 'Natural Wine Co.',
      },
      {
        key: '2',
        name: 'Elite Brands',
      },
      {
        key: '3',
        name: 'Freshpack Produce',
      },
      {
        key: '4',
        name: 'Natural Wine Co.',
      },
      {
        key: '5',
        name: 'Elite Brands',
      },
      {
        key: '6',
        name: 'Freshpack Produce',
      },
      {
        key: '7',
        name: 'Natural Wine Co.',
      },
      {
        key: '8',
        name: 'Elite Brands',
      },
      {
        key: '9',
        name: 'Freshpack Produce',
      },
      {
        key: '10',
        name: 'Natural Wine Co.',
      },
      {
        key: '11',
        name: 'Elite Brands',
      },
      {
        key: '12',
        name: 'Freshpack Produce',
      },
    ]
  }

  onPress = (selectedVendor) => {
    this.setState({ selectedVendor });
  }

  addVendor = () => {
    this.props.navigator.showModal({
      screen: 'postinvoice.AddVendorModal',
      navigatorStyle: {
        navBarHidden: true,
      }
    });
  }

  rendorVendor = ({ item }) => {
    if (this.state.selectedVendor !== item.key){
      return (
        <TouchableOpacity
          key={item.key}
          style={styles.vendorContainer}
          onPress={() => this.onPress(item.key)}
        >
          <Text style={styles.vendorTextStyle}>{item.name}</Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        key={item.key}
        style={styles.selectedVendorContainer}
        onPress={() => this.onPress(item.key)}
      >
        <Text style={styles.vendorTextStyle}>{item.name}</Text>
        <Icon name='check' size={30} color='green' style={styles.iconStyle} />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 7 }}>
          <FlatList
            style={styles.vendorListContainer}
            data={this.state.vendorNames}
            renderItem={this.rendorVendor}
            extraData={this.state}
          />
        </View>

        <TwoButtons
          leftText='New'
          onLeftPress={this.addVendor}
          rightText='Confirm'
        />

      </View>
    );
  }
}

const styles = {
  vendorListContainer: {
    flex: 1,
  },
  selectedVendorContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vendorTextStyle: {
    fontSize: 26,
    margin: 6,
  },
  vendorContainer: {
    backgroundColor: '#e9e9e9',
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.2)',
    flex: 1,
  },
  iconStyle: {
    margin: 5,
    alignSelf: 'center',
    paddingRight: 25,
  }
};

export default SecondScreen;
