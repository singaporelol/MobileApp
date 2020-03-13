import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Login from './components/Login'
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestNavigation from './components/TestNavigation'
import Preference from './components/Preference'
import Test from './components/test'
import Test2 from './components/test2'
import Report from './components/Report'
export default class HelloWorldApp extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      // <Login></Login>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="test2" component={Test2} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Preference" component={Preference} />
          <Stack.Screen name="TestNavigation" component={TestNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

