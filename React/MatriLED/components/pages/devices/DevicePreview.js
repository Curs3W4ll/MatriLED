import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '../../../contexts/ThemeProvider';

export default function DevicePreview({ navigation }) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      flexDirection: 'row',
      height: theme.sizes.section,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: theme.colors.annex,
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
      marginLeft: theme.sizes.mediumMargin,
      marginRight: theme.sizes.bigMargin,
    },
    deviceNameText: {
      fontSize: theme.sizes.title,
      color: theme.colors.text,
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
      marginRight: theme.sizes.smallMargin,
    },
    luminosityNumberText: {
      fontSize: theme.sizes.text,
      color: theme.colors.text,
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
      marginBottom: theme.sizes.mediumMargin,
    },
  });

  const [ luminosity, setLuminosity ] = useState(0);
  const [ powerColor, setPowerColor ] = useState(theme.colors.main);

  function swapPowerColor() {
    if (powerColor === theme.colors.main)
      setPowerColor(theme.colors.sub);
    else
      setPowerColor(theme.colors.main);
  }

  return(
    <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate("Device")}>
      <View style={styles.statusContainer}>
        <TouchableOpacity style={styles.statusBox} onPress={() => swapPowerColor()}>
          <FontAwesome5Icon name='power-off' color={powerColor} size={theme.sizes.bigIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.nameContainer}>
          <View style={styles.nameBox}>
            <Text style={styles.deviceNameText} numberOfLines={1}>Device name waaaaaaay too long</Text>
          </View>
        </View>
        <View style={styles.luminosityContainer}>
          <View style={styles.luminosityNumberContainer}>
            <View style={styles.luminosityNumberBox}>
              <Text style={styles.luminosityNumberText}>{ luminosity }</Text>
            </View>
          </View>
          <View style={styles.luminosityBarContainer}>
            <Slider style={styles.slider} minimumValue={0} maximumValue={100} value={luminosity} onValueChange={value => setLuminosity(value)} step={10} minimumTrackTintColor={theme.colors.main} maximumTrackTintColor={theme.colors.sub} thumbTintColor={theme.colors.annex} tapToSeek='true'/>
          </View>
          <View style={styles.luminosityIconContainer}>
            <View style={styles.luminosityIconBox}>
              <FeatherIcon name='sun' color={theme.colors.main} size={theme.sizes.mediumIcon} />
            </View>
          </View>
          <View style={styles.arrowContainer}>
            <View style={styles.arrowBox}>
              <MaterialIcon name='arrow-forward-ios' color={theme.colors.text} size={theme.sizes.smallIcon} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
