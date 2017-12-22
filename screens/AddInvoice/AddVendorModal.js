import React, { Component } from 'react';
import { View, TextInput, Text, } from 'react-native';

import TwoButtons from '../../components/TwoButtons';

class AddVendorModal extends Component <{}> {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center',  }}>

        <View style={{ backgroundColor: '#fff', margin: 25, borderRadius: 10, }}>
          <View style={{ paddingHorizontal: 25, paddingVertical: 50, }}>
            <Text style={{ fontSize: 26, paddingBottom: 25, }}>Add Vendor</Text>
            <TextInput
              style={{ fontSize: 24, }}
            />
          </View>

          <TwoButtons
            leftText='Cancel'
            rightText='Confirm'
            style={{ flex: null }}
            onLeftPress={this.props.navigator.dismissAllModals}
            onRightPress={() => alert('pressed')} // Add Vendor function
          />

        </View>

      </View>
    );
  }
}

export default AddVendorModal;
