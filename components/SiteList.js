import React, { Component } from 'react'
import { Text, View, ImageBackground, Dimensions, FlatList } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

let data = [
  { site: "site1", id: 1 },
  { site: "site2", id: 2 },
  { site: "site3", id: 3 },
  { site: "site4", id: 4 },
  { site: "site5", id: 5 },
  { site: "site6", id: 6 },
  { site: "site7", id: 7 },
  { site: "site8", id: 8 },
  { site: "site9", id: 9 },
  { site: "site10", id: 10 },
  { site: "site11", id: 11 },
  { site: "site12", id: 12 },
]

export default function SiteList(props) {
  const width = Dimensions.get('window').width;
  let [selected, setSelected] = React.useState(props.id);
  const onSelect = React.useCallback(
    id => {
      setSelected(id);
    },
    [selected],
  );
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
                  let selectedSite = data.find((val) => val.id == selected)
                  if (selectedSite) {
                    return props.setSiteVisible(false, selectedSite)
                  } else {
                    alert('Please select one site');
                  }
                }}
              >
                <Text><Icon name="ios-close" size={30} color='#ccc'></Icon></Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, minHeight: 30, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#fff' }}>Select Site</Text>
            </View>
            <View style={{ width: 30, alignItems: 'center', backgroundColor: 'green' }}>
            </View>
          </View>

        </ImageBackground>

      </View>
      <View style={{ flex: 1, backgroundColor: '#f3f7fa', alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <Item
              id={item.id}
              site={item.site}
              selected={selected}
              onSelect={onSelect}
              width={0.95 * Dimensions.get('window').width}
              props={props}
            ></Item>
          }}
          keyExtractor={item => item.id.toString()}
          extraData={selected}
        />
      </View>
    </View>
  )
}

function Item({ id, site, selected, onSelect, width }) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(id)}
    >
      <View
        style={{ flex: 1, width: width, alignItems: 'center', backgroundColor: '#fff', flexDirection: "row", height: 80, borderBottomWidth: 1, borderBottomColor: '#aaa' }}
      >
        <View style={{ width: 30, marginLeft: 20 }}>
          {selected === id ?
            <Icon name="md-checkmark-circle" size={29} color='#0891cf'></Icon> :
            <Icon name="md-checkmark-circle" size={29} color='#ccc'></Icon>
          }
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text>{site}</Text>
        </View>
      </View>
    </TouchableOpacity>)
}
