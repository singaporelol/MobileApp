import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated, { cos } from 'react-native-reanimated'
import Completed from './Complete'
import InProgress from './InProgress'
import Submitted from './Submitted'
import Approved from './Approved'
let data = [
  { createdBy: "Jognwut, Acchwichai1", assets: "Lab Post1", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over1", status: "Completed", id: 1 },
  { createdBy: "Jognwut, Acchwichai2", assets: "Lab Post2", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over2", status: "Completed", id: 2 },
  { createdBy: "Jognwut, Acchwichai3", assets: "Lab Post3", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over3", status: "Completed", id: 3 },
  { createdBy: "Jognwut, Acchwichai4", assets: "Lab Post4", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over4", status: "Completed", id: 4 },
  { createdBy: "Jognwut, Acchwichai5", assets: "Lab Post5", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over5", status: "Completed", id: 5 },
  { createdBy: "Jognwut, Acchwichai6", assets: "Lab Post6", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over6", status: "Completed", id: 6 },
  { createdBy: "Jognwut, Acchwichai7", assets: "Lab Post7", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over7", status: "Completed", id: 7 },
  { createdBy: "Jognwut, Acchwichai8", assets: "Lab Post8", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over8", status: "Completed", id: 8 },
  { createdBy: "Jognwut, Acchwichai9", assets: "Lab Post9", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over9", status: "Completed", id: 9 },
  { createdBy: "Jognwut, Acchwichai10", assets: "Lab Post10", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over10", status: "Completed", id: 10 },
  { createdBy: "Jognwut, Acchwichai11", assets: "Lab Post11", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over11", status: "Completed", id: 11 },
  { createdBy: "Jognwut, Acchwichai12", assets: "Lab Post12", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over12", status: "Completed", id: 12 },
  { createdBy: "Jognwut, Acchwichai12", assets: "Lab Post12", createdDate: "12/19/2019 11:53 AM", submittedDate: "12/19/2019 11:53 AM", title: "Post1 Lab Technician Hand over12", status: "InProgress", id: 13 },
]
export default class Report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      completeCount: "",
    }
  }
  render() {
    const width = Dimensions.get('window').width;
    const Tab = createMaterialTopTabNavigator();
    return (
      <View style={{ flex: 1, width: width }}>
        <View style={{ height: 120, width: width }}>
          <ImageBackground
            source={require('./../img/bg-main.png')}
            style={{ flex: 1, width: width, paddingLeft: 20 }}
          >
            <View style={{ flex: 1, height: 150, alignItems: 'flex-end', flexDirection: 'row', marginBottom: 30 }}>
              <View style={{ width: 30, alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={() => {

                  }}
                >
                  <Text><Icon name="ios-menu" size={30} color='#ccc'></Icon></Text>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', minHeight: 30, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ position: 'relative', left: 40, zIndex: 10 }}><Icon name="ios-search" size={20} color='#ccc'></Icon></Text>
                <TextInput
                  placeholder={'Search'}
                  placeholderTextColor='#fff'
                  // value={'Search'}
                  style={{ backgroundColor: '#2e497d', paddingLeft: 45, width: 0.3 * width, height: 30, color: '#fff', borderRadius: 15 }}
                >
                </TextInput>
                {/* <Text><Icon name="ios-search" size={30} color='#ccc'></Icon></Text> */}
              </View>
              <View style={{ width: 180, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                <Text><Icon name="ios-refresh" size={30} color='#ccc'></Icon></Text>
                <Text><Icon name="ios-timer" size={30} color='#ccc'></Icon></Text>
                <Text><Icon name="ios-notifications-outline" size={30} color='#ccc'></Icon></Text>
              </View>
            </View>
          </ImageBackground>

        </View>
        <View style={{ flex: 1, backgroundColor: '#f3f7fa', alignItems: 'center', marginTop: 10 }}>
          <View style={{ backgroundColor: '#fff', width: 0.95 * width, paddingHorizontal: 20 }}>
            <View style={{ flexDirection: 'row', height: 60, marginBottom: 5 }}>
              <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text style={{ fontSize: 25, fontWeight: "bold", paddingRight: 20 }}>Log Report</Text>
                  <Text style={{ marginTop: 3 }}><Icon name="md-checkmark-circle" size={18} color='#b4d304'></Icon></Text>
                  <Text style={{ marginTop: 3, paddingLeft: 10, color: '#444' }}>Online</Text>
                </View>
                <View>
                  <Text style={{ marginTop: 10, color: '#444' }}>Last Sync: 12/01/2020 2:15PM</Text>
                </View>
              </View>
              <View style={{ width: 80, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="ios-add-circle" size={60} color='#0891cf'></Icon>
              </View>
            </View>
            <View style={{ justifyContent: 'space-evenly', height: 120, backgroundColor: '#fff' }}>
              <Text style={{ color: '#444' }}>Site Name</Text>
              <View style={{ flexDirection: 'row' }}><Text style={{ color: '#444' }}>Plant Name</Text><Text style={{ marginHorizontal: 10, color: '#444' }}>|</Text><Text style={{ color: '#444' }}>Console Name</Text></View>
              <Text style={{ color: '#444' }}>Post Name</Text>
            </View>
          </View>
          {/* Site list detail */}
          <View style={{ flex: 1, width: 0.95 * width, margin: 10, backgroundColor: '#fff', }}>
            <Tab.Navigator
              initialRouteName="Completed"
              tabBar={props => <TabStatusBar {...props} />}
              style={{ margin: 10 }}
            >
              {/* <Tab.Screen name="Completed" component={Completed} GetCompleteCount={this.getCompleteCount} /> */}
              <Tab.Screen name="Completed" component={Completed} 
              initialParams={{data:data.filter(val=>val.status=="Completed")}} />
              <Tab.Screen name="InProgress" component={InProgress} />
              <Tab.Screen name="Submitted" component={Submitted} />
              <Tab.Screen name="Approved" component={Approved} />
            </Tab.Navigator>
          </View>
        </View>
      </View>
    )
  }
}
function TabStatusBar({ state, descriptors, navigation, position, route }) {
  const width = Dimensions.get('window').width;
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // modify inputRange for custom behavior
        const inputRange = state.routes.map((_, i) => i);

        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: [1, 1, 1, 1]
        });
        console.log(data.filter(val=>val.status==route.name).length)
        return (
          <TouchableOpacity
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Animated.View style={getTextStyle(width, index, state.routes.length, opacity, isFocused)}>
              <Animated.Text style={isFocused && { fontWeight: 'bold' }}>{label}</Animated.Text>
              <Animated.Text style={isFocused && { fontWeight: 'bold' }}>
                {data.filter(val=>val.status==route.name).length}</Animated.Text>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
function getTextStyle(width, index, length, opacity, isFocused) {
  let selected = {};
  if (isFocused) { selected = { backgroundColor: '#dbe3e7' } }

  if (index == 0) {
    return {
      width: 0.9 * width / 4,
      justifyContent: 'center', height: 60, alignItems: 'center',
      backgroundColor: '#edf3f3',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      opacity,
      ...selected
    }
  } else if (index == length - 1) {
    return {
      width: 0.9 * width / 4,
      justifyContent: 'center', height: 60, alignItems: 'center',
      backgroundColor: '#edf3f3',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      opacity,
      ...selected
    }
  } else {
    return {
      width: 0.9 * width / 4,
      justifyContent: 'center', height: 60, alignItems: 'center',
      backgroundColor: '#edf3f3',
      opacity,
      ...selected
    }
  }

}