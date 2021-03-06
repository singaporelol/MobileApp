import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ImageBackground, TextInput, TouchableOpacity, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Animated, { cos } from 'react-native-reanimated'
import Completed from './Complete'
import InProgress from './InProgress'
import Submitted from './Submitted'
import Approved from './Approved'
export default class Report extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const width = Dimensions.get('window').width;
    const Tab = createMaterialTopTabNavigator();


    return (
      <View style={{ flex: 1, width: width }}>
        <View style={{ height: 150, width: width }}>
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
            <View style={{ flexDirection: 'row', height: 80, marginBottom: 5 }}>
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

          <View style={{ flex: 1, width: width, margin: 10, backgroundColor: 'yellow' }}>
            <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
              <Tab.Screen
                name="Completed"
                component={Completed}
              // options={{ tabBarLabel: 'Completed' }}
              />

              <Tab.Screen
                name="InProgress"
                component={InProgress}
              // options={{ tabBarLabel: 'InProgress' }}
              />
            </Tab.Navigator>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10, width: width * 0.95 }}>
              <View style={{ borderTopLeftRadius: 10, borderBottomLeftRadius: 10, flex: 1, justifyContent: 'center', height: 60, alignItems: 'center', backgroundColor: '#edf3f3' }}>
                <Text>Completed</Text>
                <Text>05</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', height: 60, alignItems: 'center', backgroundColor: '#edf3f3' }}>
                <Text>In Progress</Text>
                <Text>02</Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'center', height: 60, alignItems: 'center', backgroundColor: '#edf3f3' }}>
                <Text>Submitted</Text>
                <Text>05</Text>
              </View>
              <View style={{ borderTopRightRadius: 10, borderBottomRightRadius: 10, flex: 1, justifyContent: 'center', height: 60, alignItems: 'center', backgroundColor: '#edf3f3' }}>
                <Text>Approved</Text>
                <Text>05</Text>
              </View>
            </View>

          </View>
        </View>
      </View>
    )
  }
}
function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row', paddingTop: 20, marginTop: 20 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;
        const isFocused = state.index === index;
        console.log(state)
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
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            // onPress={onPress}
            // onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            {/* <Animated.Text style={{ opacity }}>{label}</Animated.Text> */}
            <Animated.Text style={{ }}>{label}</Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}