import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Complete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }

  // this.props.navigation.setParams({completeCount:this.state.completeCount})
componentDidMount(){
  // console.log(this.props.route.params.data)
  this.setState({
    data:this.props.route.params.data
  })
}
  render() {
    return (
      <View style={{ flex: 1, width: '100%', backgroundColor: '#fff' }}>
        <View style={{ height: 10, width: '100%', backgroundColor: '#fff' }}></View>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => {
            return <Item
              item={item}
            // selected={selected}
            // onSelect={onSelect}
            ></Item>
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    )
  }
}
function Item({ item }) {
  let { createdBy, title, status, assets, createdDate, submittedDate } = item;
  let width = Dimensions.get('window').width;
  return (
    <TouchableOpacity
      onPress={() => { alert('click') }}
    >
      <View style={{ flex: 1, backgroundColor: 'green' }}>
        <View style={{ height: 140, backgroundColor: '#fff', borderTopWidth: 3, borderTopColor: '#f3f7fa' }}>
          <View style={{ justifyContent: 'space-between', height: 40, flexDirection: 'row', alignItems: 'center' }} >
            <Text style={{ width: 0.55 * width, fontWeight: 'bold' }}>{title}</Text>
            <View><Text style={{ color: '#afc13a', backgroundColor: '#f6f9e2' }}>{status}</Text></View>
          </View>
          <View style={{ height: 40, flexDirection: 'row', alignItems: 'center' }} >
            <View style={{ width: 0.55 * width }}>
              <Text style={{ fontSize: 10, color: '#444' }}>Created by</Text>
              <Text style={{ color: '#444' }}>{createdBy}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={{ fontSize: 10, color: '#444' }}>Assets</Text>
                <Text style={{ color: '#444' }}>{assets}</Text>
              </View>
              <Icon name="angle-right" size={29} color='#afc13a'></Icon>
            </View>
          </View>
          <View style={{ height: 40, flexDirection: 'row', alignItems: 'center' }} >
            <View style={{ width: 0.55 * width }}>
              <Text style={{ fontSize: 10, color: '#444' }}>Created Date</Text>
              <Text style={{ color: '#444' }}>{createdDate}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 10, color: '#444' }}>Submitted Date</Text>
              <Text style={{ color: '#444' }}>{submittedDate}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}