import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Allnavigators from "./allnavigation"
import Reminder from "./Screens/ReminderScreen"
export default class App extends React.Component {
  
  render()
  {


  return (
   <View>
   <Allnavigators/>
   <Reminder/>
   </View>
  );
}
}

