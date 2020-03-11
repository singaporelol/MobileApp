import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Modal,
  View
} from 'react-native';


export default class Test2 extends React.Component {
  // const [display, setdisplay] = useState(false);
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.display}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => {
              // console.log(props)
              return this.props.hhh(false)
            }}
          >
            <Text>Click to close modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}

