import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import LoadingIndicator from '../../LoadingIndicator';
import { useTheme } from '../../../contexts/ThemeProvider';
import { setStorageValue, getStorageValue } from '../../../helper/storage';

const {height, width} = Dimensions.get('screen');

const ITEM_HEIGHT = height * 0.1;
const SUBITEM_HEIGHT = ITEM_HEIGHT * 0.4;
const MARGIN = width * 0.07;

export default function LanguageSetting() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      height: ITEM_HEIGHT,
      flexDirection: 'row',
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      flex: 2,
    },
    text: {
      marginLeft: MARGIN,
      fontSize: 25,
      color: theme.text,
    },
    switchContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    },
    flagImageButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      height: SUBITEM_HEIGHT,
    },
    flagImage: {
      resizeMode: 'contain',
      flex: 0.7,
    },
  });

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ usedLanguage, setUsedLanguage ] = useState("fr");

  async function GetStoredValue() {
    const storedUsedLanguage = await getStorageValue("usedLanguage");

    if (storedUsedLanguage)
      setUsedLanguage(storedUsedLanguage);

    setIsLoaded(true);
  }

  function UpdateSwitchValue(switchValue) {
    setStorageValue("usedLanguage", switchValue);
    setUsedLanguage(switchValue);
  }

  useEffect(() => {
    GetStoredValue();
  }, [ITEM_HEIGHT, SUBITEM_HEIGHT, MARGIN]);

  if (isLoaded) {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Language</Text>
        </View>
        <View style={styles.switchContainer}>
          <TouchableOpacity style={styles.flagImageButton} onPress={() => UpdateSwitchValue("fr")}>
            <Image source={require('../../../assets/frFlag.png')} style={[styles.flagImage, usedLanguage !== "fr" ? { opacity: 0.5 } : {}]} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.flagImageButton} onPress={() => UpdateSwitchValue("uk")}>
            <Image source={require('../../../assets/ukFlag.png')} style={[styles.flagImage, usedLanguage !== "uk" ? { opacity: 0.5 } : {}]} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return(
      <LoadingIndicator />
    );
  }
}
