import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

const {height} = Dimensions.get('screen');
const ITEM_HEIGHT = height * 0.15;

export default function DevicePreview({ navigation }) {
  const [luminosity, setLuminosity] = useState(0);
  const [powerColor, setPowerColor] = useState('#c930e5');
  const [stateBoxLayout, setStateBoxLayout] = useState({});
  const [nameBoxLayout, setNameBoxLayout] = useState({});
  const [luminosityNumberBoxLayout, setLuminosityNumberBoxLayout] = useState({});
  const [luminosityIconBoxLayout, setLuminosityIconBoxLayout] = useState({});
  const [arrowBoxLayout, setArrowBoxLayout] = useState({});

  function swapPowerColor() {
    if (powerColor === '#c930e5')
      setPowerColor('#dbbbe1');
    else
      setPowerColor('#c930e5');
  }
  return(
    <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate("Device")}>
      <View style={styles.statusContainer}>
        <TouchableOpacity style={styles.statusBox} onPress={() => swapPowerColor()} onLayout={({ nativeEvent }) => {setStateBoxLayout(nativeEvent.layout) }}>
          <FontAwesome5Icon name='power-off' color={powerColor} size={stateBoxLayout.width} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.nameBox} onLayout={({ nativeEvent }) => {setNameBoxLayout(nativeEvent.layout)}}>
            <Text style={{fontSize: nameBoxLayout.height, color: 'white'}} numberOfLines={1}>Device name too long</Text>
          </View>
        </View>
        <View style={styles.luminosityContainer}>
          <View style={styles.luminosityNumberContainer}>
            <View style={styles.luminosityNumberBox} onLayout={({ nativeEvent }) => {setLuminosityNumberBoxLayout(nativeEvent.layout)}}>
              <Text style={{fontSize: luminosityNumberBoxLayout.height, color: 'white'}}>{ luminosity }</Text>
            </View>
          </View>
          <View style={styles.luminosityBarContainer}>
            <Slider style={styles.slider} minimumValue={0} maximumValue={100} value={luminosity} onValueChange={value => setLuminosity(value)} step={10} minimumTrackTintColor='#c930e5' maximumTrackTintColor='#dbbbe1' thumbTintColor='#cccccc' tapToSeek='true'/>
          </View>
          <View style={styles.luminosityIconContainer}>
            <View style={styles.luminosityIconBox} onLayout={({ nativeEvent }) => {setLuminosityIconBoxLayout(nativeEvent.layout)}}>
              <FeatherIcon name='sun' color='#c930e5' size={luminosityIconBoxLayout.width} />
            </View>
          </View>
          <View style={styles.arrowContainer}>
            <View style={styles.arrowBox} onLayout={({ nativeEvent }) => {setArrowBoxLayout(nativeEvent.layout)}}>
              <SimpleLineIcon name='arrow-right' color='#cccccc' size={arrowBoxLayout.width} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
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
    flex: 0.7,
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
  slider: {
    flex: 1,
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
