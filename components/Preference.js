import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity, Modal } from 'react-native'
import PerferenceStyle from './PreferenceStyle'
import { Triangle } from './../assets/utils/utils'
import SiteList from './SiteList'
import PlantList from './PlantList'
import ConsoleList from './ConsoleList'
import PostList from './PostList'
export default class Preference extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteListVisible: false,
      plantListVisible: false,
      consoleListVisible: false,
      postListVisible: false,
      selectSite: {},
      selectPlant: {},
      selectConsole:{},
      selectPost:{}
    }

  }
  setSiteVisible = (isVisible, selectSite) => {
    this.setState({
      siteListVisible: isVisible,
      selectSite
    })
  }
  setPlantVisible = (isVisible,selectPlant) => {
    this.setState({
      plantListVisible: isVisible,
      selectPlant
    })
  }
  setConsoleVisible = (isVisible,selectConsole) => {
    this.setState({
      consoleListVisible: isVisible,
      selectConsole
    })
  }
  setPostVisible = (isVisible,selectPost) => {
    this.setState({
      postListVisible: isVisible,
      selectPost
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
        >
          <SiteList setSiteVisible={this.setSiteVisible} site={this.state.selectSite.site} id={this.state.selectSite.id}></SiteList>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.plantListVisible}
        >
          <PlantList plantVisible={this.setPlantVisible} plant={this.state.selectPlant.plant} id={this.state.selectPlant.id}></PlantList>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.consoleListVisible}
        >
          <ConsoleList consoleVisible={this.setConsoleVisible} console={this.state.selectConsole.console} id={this.state.selectConsole.id}></ConsoleList>
        </Modal>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.postListVisible}
        >
          <PostList postVisible={this.setPostVisible} console={this.state.selectPost.post} id={this.state.selectPost.id}></PostList>
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
            <TextInput
              placeholder={'Select Site'}
              style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10, paddingLeft: 8 }}
              onFocus={() => {
                this.setState({
                  siteListVisible: true
                })
              }}
              value={this.state.selectSite.site}
            ></TextInput>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />
          </View>
          <View>
            <Text style={{ color: '#222' }}>Plant</Text>
            <TextInput
              placeholder={'Select Plant'}
              style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10, paddingLeft: 8 }}
              onFocus={() => {
                this.setState({
                  plantListVisible: true
                })
              }}
              value={this.state.selectPlant.plant}
            >
            </TextInput>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />
          </View>
          <View>
            <Text style={{ color: '#222' }}>Console</Text>
            <TextInput
              placeholder={'Select Console'}
              style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10, paddingLeft: 8 }}
              onFocus={() => {
                this.setState({
                  consoleListVisible: true
                })
              }}
              value={this.state.selectConsole.console}
            >
            </TextInput>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />
          </View><View>
            <Text style={{ color: '#222' }}>Post</Text>
            <TextInput
              placeholder={'Select Post'}
              style={{ height: 40, width: 0.8 * width, borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff', marginTop: 10, marginBottom: 10, paddingLeft: 8 }}
              onFocus={() => {
                this.setState({
                  postListVisible: true
                })
              }}
              value={this.state.selectPost.post}
            >
            </TextInput>
            <Triangle
              style={{ position: 'absolute', right: 70, top: 45, borderBottomColor: '#777' }}
            />
          </View>
          <View style={{ width: 0.8 * width }}>
            <TouchableOpacity
              style={PerferenceStyle.loginButton}
              onPress={() => navigation.navigate('Report')}
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
