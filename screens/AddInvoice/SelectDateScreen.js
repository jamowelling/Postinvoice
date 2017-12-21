import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';

import DatePicker from 'react-native-datepicker';

class SelectDateScreen extends Component <{}> {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
    this.state = {
      date: new Date().toLocaleDateString(),
    };
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
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <DatePicker
          style={{
            width: Dimensions.get('window').width,
            height: 400,
            paddingBottom: 50,
            justifyContent: 'center'
          }}
          androidMode='default'
          customStyles={{
            dateText: {
              fontSize: 40,
            },
            dateInput: {
              // height: 60,
              borderColor: 'rgba(0,0,0,0.2)',
              borderRadius: 15,
              margin: 7,
            }
          }}
          placeholder={this.state.date}
          mode='date'
          format='MM-DD-YYYY'
          date={this.state.date}
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          onDateChange={date => this.setState({ date })}
        />
      </View>
    );
  }
}

export default SelectDateScreen;
