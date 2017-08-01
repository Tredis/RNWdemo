import React, {Component} from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import Dropdown from 'react-dropdown'
import DateTimePicker from '../../../node_modules_gitsync/react-datetime-calendar';

export default class App extends Component {

   render() {
      return (
         <View>
            react-dropdown component example:
            <Dropdown 
               options={['one', 'two', 'three']} 
               value={['one', 'two', 'three']} 
               placeholder="Select an option"
            />
            <br/>
            react-datetime-calendar component example:
            <DateTimePicker theme='window'/>
         </View>
      );
   }
}
