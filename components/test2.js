import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Test from './test';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Test2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
  }
  setDislay=(display)=>{
    // this.setState({
    //   display:false
    // })
    console.log(display+" value from child")
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
        <TouchableOpacity
          onPress={() => {
            this.setState({
              display: true
            })
          }}
        >
          <Text>CLICK ME</Text>
        </TouchableOpacity>
        <Test hhh={this.setDislay} display={this.state.display}>
        </Test>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
