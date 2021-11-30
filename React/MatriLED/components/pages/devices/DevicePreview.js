import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import LoadingIndicator from '../../LoadingIndicator';
import { useTheme } from '../../../contexts/ThemeProvider';

const { height } = Dimensions.get('screen');

const ITEM_HEIGHT = height * 0.15;

export default function DevicePreview({ navigation }) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'row',
      height: ITEM_HEIGHT,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.annex,
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
    nameText: {
      color: theme.text,
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

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ luminosity, setLuminosity ] = useState(0);
  const [ powerColor, setPowerColor ] = useState(theme.main);
  const [ stateBoxLayout, setStateBoxLayout ] = useState({});
  const [ nameBoxLayout, setNameBoxLayout ] = useState({});
  const [ luminosityNumberBoxLayout, setLuminosityNumberBoxLayout ] = useState({});
  const [ luminosityIconBoxLayout, setLuminosityIconBoxLayout ] = useState({});
  const [ arrowBoxLayout, setArrowBoxLayout ] = useState({});

  function swapPowerColor() {
    if (powerColor === theme.main)
      setPowerColor(theme.sub);
    else
      setPowerColor(theme.main);
  }

  useEffect(() => {
    setIsLoaded(true);
  }, [ ITEM_HEIGHT]);

  if (isLoaded) {
    return(
      <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate("Device")}>
        <View style={styles.statusContainer}>
          <TouchableOpacity style={styles.statusBox} onPress={() => swapPowerColor()} onLayout={({ nativeEvent }) => { setStateBoxLayout(nativeEvent.layout) }}>
            <FontAwesome5Icon name='power-off' color={powerColor} size={stateBoxLayout.width} />
          </TouchableOpacity>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.nameContainer}>
            <View style={styles.nameBox} onLayout={({ nativeEvent }) => { setNameBoxLayout(nativeEvent.layout) }}>
              <Text style={[styles.nameText, { fontSize: nameBoxLayout.height }]} numberOfLines={1}>Device name too long</Text>
            </View>
          </View>
          <View style={styles.luminosityContainer}>
            <View style={styles.luminosityNumberContainer}>
              <View style={styles.luminosityNumberBox} onLayout={({ nativeEvent }) => { setLuminosityNumberBoxLayout(nativeEvent.layout) }}>
                <Text style={[styles.nameText, { fontSize: luminosityNumberBoxLayout.height }]}>{ luminosity }</Text>
              </View>
            </View>
            <View style={styles.luminosityBarContainer}>
              <Slider style={styles.slider} minimumValue={0} maximumValue={100} value={luminosity} onValueChange={value => setLuminosity(value)} step={10} minimumTrackTintColor={theme.main} maximumTrackTintColor={theme.sub} thumbTintColor={theme.annex} tapToSeek='true'/>
            </View>
            <View style={styles.luminosityIconContainer}>
              <View style={styles.luminosityIconBox} onLayout={({ nativeEvent }) => { setLuminosityIconBoxLayout(nativeEvent.layout) }}>
                <FeatherIcon name='sun' color={theme.main} size={luminosityIconBoxLayout.width} />
              </View>
            </View>
            <View style={styles.arrowContainer}>
              <View style={styles.arrowBox} onLayout={({ nativeEvent }) => { setArrowBoxLayout(nativeEvent.layout) }}>
                <SimpleLineIcon name='arrow-right' color={theme.annex} size={arrowBoxLayout.width} />
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return(
      <LoadingIndicator />
    );
  }
}
