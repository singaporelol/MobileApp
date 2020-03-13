import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class InProgress extends Component {
  render() {
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'red'}}>
        <Text> InProgress </Text>
      </View>
    )
  }
}
