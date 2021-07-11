import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Profile from "../Screens/Profile";
import Logout from "../Google/logout";
import ViewWeather  from "../Screens/viewweather"
import ViewTimeTable from "../Screens/ViewTimeTable"
import Reminder from "../Screens/ReminderScreen"

const Drawer= createDrawerNavigator();
const Stack= createStackNavigator();
const MaterialBottomTabs= createMaterialBottomTabNavigator();

export default class Allnavigators extends React.Component {
  render() {
    return( 
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name= "Profile" component={Profile}/>
          <Drawer.Screen name= "ViewWeather" component={ViewWeather}/>
          <Drawer.Screen name= "ViewTimeTable" component={ViewTimeTable}/>
          <Drawer.Screen name= "Reminder" component={Reminder}/>
          <Drawer.Screen name= "Logout" component={Logout}/>
        </Drawer.Navigator>
      </NavigationContainer>);
  }
}
