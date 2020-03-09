import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity, Modal } from 'react-native'
import PerferenceStyle from './PreferenceStyle'
import { FlatList } from 'react-native-gesture-handler';
import { Triangle } from './../assets/utils/utils'
import SiteList from './SiteList'
import PlantList from './PlantList'
export default class Preference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteListVisible: false,
      plantListVisible: false,
      selectSite: {},
      selectPlant: {}
    }

  }
  setSiteVisible = (isVisible, selectSite) => {
    this.setState({
      siteListVisible: isVisible,
      ...selectSite,
    })
  }

  setPlantVisible = (a) => {
    this.setState({
      plantListVisible: a,
      // selectPlant:{...selectPlant}
      
    })
  }

  render() {

    const width = Dimensions.get('window').width;
    let navigation = this.props.navigation;
    return (
      <View style={PerferenceStyle.wrapper}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.siteListVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <SiteList setSiteVisible={this.setSiteVisible} site={this.state.site} id={this.state.id}></SiteList>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.plantListVisible}
        >
          <PlantList setplantVisible={this.setPlantVisible}></PlantList>
        </Modal>
        <View style={PerferenceStyle.header}>
          <ImageBackground
            source={require('./../img/bg-main.png')}
            style={{ width: width, flex: 1, paddingLeft: 20 }}
          >
            <View style={PerferenceStyle.logowrap}>
              <Image
                source={require('./../img/logo.png')}
                style={PerferenceStyle.logo}
              ></Image>
            </View>
            <View style={PerferenceStyle.headerWrap}>
              <View style={{ width: 40 }}>
                <Image
                  source={require('./../img/avator.png')}
                  style={{ width: 40, height: 40, borderRadius: 40 }}
                ></Image>
              </View>
              <View style={{ flex: 1, paddingLeft: 10 }}>
                <Text
                  style={PerferenceStyle.headerTextTop}
                >Welcome to</Text>
                <Text style={PerferenceStyle.headerTextBottom}>Shiftlog Monitering</Text>
              </View>
              <View style={{ flexDirection: 'row', marginTop: 17 }}>
                <View style={{ height: 20, width: 20, borderRadius: 20, backgroundColor: 'green', borderWidth: 2, borderColor: '#fff' }}></View>
                <Text style={{ marginRight: 20, paddingLeft: 10, lineHeight: 20, color: '#fff' }}>Online</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={PerferenceStyle.body}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ color: '#151920', fontWeight: 'bold', fontSize: 18 }}>Set your preferences</Text>
            <Text style={{ color: '#222', fontSize: 12 }}>You can change later in settings</Text>
          </View>
          <View>
            <Text style={{ color: '#222' }}>Site</Text>
            <Text
              placeholder={'Select Site'}
              style={{
                lineHeight: 40, height: 40, width: 0.8 * width,
                borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff',
                marginTop: 10, marginBottom: 10, paddingLeft: 8
              }}
              onPress={() => {
                this.setState({
                  siteListVisible: true
                })
              }}
            >{this.state.site}</Text>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />

          </View>
          <View>
            <Text style={{ color: '#222' }}>Plant</Text>
            <Text
              placeholder={'Select Plant'}
              style={{
                lineHeight: 40, height: 40, width: 0.8 * width,
                borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff',
                marginTop: 10, marginBottom: 10, paddingLeft: 8
              }}
              onPress={() => {
                this.setState({
                  plantListVisible: true
                })
              }}
            >
              {/* {this.state.selectPlant.plant} */}

            </Text>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />

          </View>
          {/* <View>
            <Text style={{ color: '#222' }}>Plant</Text>
            <TextInput
              placeholder={'Select Plant'}
              editable={false}
              style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10, paddingLeft: 8 }}
            ></TextInput>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />
          </View> */}
          <View>
            <Text style={{ color: '#222' }}>Concole</Text>
            <TextInput
              placeholder={'Select Concole'}
              editable={false}
              style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10, paddingLeft: 8 }}
            ></TextInput>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />
          </View>
          <View>
            <Text style={{ color: '#222' }}>Post</Text>
            <TextInput
              placeholder={'Select Post'}
              editable={false}
              style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10, paddingLeft: 8 }}
            ></TextInput>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />
          </View>
          <View style={{ width: 0.8 * width }}>
            <TouchableOpacity
              style={PerferenceStyle.loginButton}
              onPress={() => navigation.navigate('Preference')}
            >
              <Text
                style={{ color: '#fff' }}
              >Save and Continue</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }
}
