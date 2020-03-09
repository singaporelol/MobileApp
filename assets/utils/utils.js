import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'

export class Triangle extends Component {
  render() {
    return (
      <View style={[style.triangle,this.props.style]} />
     
    )
  }
}
let style=StyleSheet.create({
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [
      {rotate: '180deg'}
    ]
  }
})
  