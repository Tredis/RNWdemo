import React, {Component} from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
import Datetime from 'react-datetime';
import Dropdown from 'react-dropdown'
import InputMoment from 'input-moment'
//import DateTimePicker from 'react-datetime-calendar';


export default class App extends Component {

   render() {
      return (
         <View>
            <Datetime/>

            {/*<DateTimePicker theme='window'/>*/}

            {/*<InputMoment/>*/}

            <Dropdown 
               options={['one', 'two', 'three']} 
               value={['one', 'two', 'three']} 
               placeholder="Select an option" />
         </View>
      );
   }
}
