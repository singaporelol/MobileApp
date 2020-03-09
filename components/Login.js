import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity } from 'react-native'
import LoginStyle from './LoginStyle';
import Test from './test'
export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const width = Dimensions.get('window').width;
    let navigation=this.props.navigation;
    return (
      <View style={LoginStyle.wrapper}>
        <View style={LoginStyle.header}>
          <ImageBackground
            source={require('./../img/bg-main.png')}
            style={{ width: width, flex: 1, paddingLeft: 20 }}
          >
            <View style={LoginStyle.logowrap}>
              <Image
                source={require('./../img/logo.png')}
                style={LoginStyle.logo}
              ></Image>
            </View>
            <View style={LoginStyle.headerTextWrap}>
              <Text
                style={LoginStyle.headerTextTop}
              >Welcome to</Text>
              <Text style={LoginStyle.headerTextBottom}>Shiftlog Monitering</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={LoginStyle.body}>
          <Text style={{ color: '#151920', fontWeight: 'bold', lineHeight: 60 }}>Login</Text>
          <Text style={{ color: '#222' }}>Email</Text>
          <TextInput
            style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10 }}
          ></TextInput>
          <Text style={{ color: '#222' }}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10 }}
          ></TextInput>
          
          <View style={{ width:0.8*width}}>
            <TouchableOpacity
              style={LoginStyle.loginButton}
              onPress={()=>navigation.navigate('Preference',{...this.props})}
            >
              <Text 
              style={{color:'#fff'}}
              >Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
