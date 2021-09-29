// components/Device.js
import React from 'react'
import { Text, View, StyleSheet, Dimensions, findNodeHandle } from 'react-native'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

const {height} = Dimensions.get('screen');
const ITEM_HEIGHT = height * 0.15;

export default class Device extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateBoxLayout: {},
      nameBoxLayout: {},
      luminosityNumberBoxLayout: {},
      luminosityIconBoxLayout: {},
      arrowBoxLayout: {},
    }
  }

  render() {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.statusContainer}>
          <View style={styles.statusBox} onLayout={({ nativeEvent }) => {this.setState({stateBoxLayout: nativeEvent.layout })}}>
            <FontAwesome5Icon name='power-off' color='#c930e5' size={this.state.stateBoxLayout.width} />
          </View>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <View style={styles.nameBox} onLayout={({ nativeEvent }) => {this.setState({nameBoxLayout: nativeEvent.layout })}}>
              <Text style={{fontSize: this.state.nameBoxLayout.height, color: 'white'}} numberOfLines={1}>Device name too long</Text>
            </View>
          </View>
          <View style={styles.luminosityContainer}>
            <View style={styles.luminosityNumberContainer}>
              <View style={styles.luminosityNumberBox} onLayout={({ nativeEvent }) => {this.setState({luminosityNumberBoxLayout: nativeEvent.layout })}}>
                <Text style={{fontSize: this.state.luminosityNumberBoxLayout.height, color: 'white'}}>100</Text>
              </View>
            </View>
            <View style={styles.luminosityBarContainer}>
            </View>
            <View style={styles.luminosityIconContainer}>
              <View style={styles.luminosityIconBox} onLayout={({ nativeEvent }) => {this.setState({luminosityIconBoxLayout: nativeEvent.layout })}}>
                <FeatherIcon name='sun' color='#c930e5' size={this.state.luminosityIconBoxLayout.width} />
              </View>
            </View>
            <View style={styles.arrowContainer}>
              <View style={styles.arrowBox} onLayout={({ nativeEvent }) => {this.setState({arrowBoxLayout: nativeEvent.layout })}}>
                <SimpleLineIcon name='arrow-right' color='#cccccc' size={this.state.arrowBoxLayout.width} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    height: ITEM_HEIGHT,
    borderColor: '#cccccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  statusContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusBox: {
    flexWrap: 'nowrap',
    flex: 0.65,
  },
  infoContainer: {
    flex: 8,
  },
  nameContainer: {
    justifyContent: 'center',
    flex: 2,
  },
  nameBox: {
    flex: 0.8,
    marginLeft: '5%',
    marginRight: '10%',
  },
  luminosityContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  luminosityNumberContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  luminosityNumberBox: {
    flex: 0.3,
    alignItems: 'flex-end',
    marginRight: '10%',
  },
  luminosityBarContainer: {
    flex: 8,
  },
  luminosityIconContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  luminosityIconBox: {
    justifyContent: 'center',
    flex: 0.8,
  },
  arrowContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  arrowBox: {
    flex: 0.4,
    marginBottom: '30%',
  },
});
