import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Login from './components/Login'
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TestNavigation from './components/TestNavigation'
import Preference from './components/Preference'
import Test from './components/test'
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
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="test" component={Test} />
          <Stack.Screen name="Preference" component={Preference} />
          <Stack.Screen name="TestNavigation" component={TestNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

