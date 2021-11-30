import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet, Dimensions } from 'react-native';
import LoadingIndicator from '../../LoadingIndicator';
import { useTheme } from '../../../contexts/ThemeProvider';
import { setStorageValue, getStorageValue } from '../../../helper/storage';

const {height, width} = Dimensions.get('screen');

const ITEM_HEIGHT = height * 0.1;
const SUBITEM_HEIGHT = ITEM_HEIGHT * 0.4;
const MARGIN = width * 0.07;

export default function SystemThemeSetting() {
  const { theme, UseSystemTheme } = useTheme();
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
    switchContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      flex: 1,
    },
    text: {
      marginLeft: MARGIN,
      fontSize: 25,
      color: theme.text,
    },
    switcher: {
      marginRight: MARGIN,
    },
  });

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ switchValue, setSwitchSystemThemeValue ] = useState(true);

  async function GetStoredValue() {
    const storedDidUseSystemTheme = await getStorageValue("didUseSystemTheme");

    if (storedDidUseSystemTheme && storedDidUseSystemTheme === "false")
      setSwitchSystemThemeValue(false);
    else
      setSwitchSystemThemeValue(true);

    setIsLoaded(true);
  }

  function UpdateSwitchValue(switchValue) {
    if (switchValue) {
      setStorageValue("didUseSystemTheme", "true");
      UseSystemTheme();
    } else
      setStorageValue("didUseSystemTheme", "false");
    setSwitchSystemThemeValue(switchValue);
  }

  useEffect(() => {
    GetStoredValue();
  }, [ITEM_HEIGHT, SUBITEM_HEIGHT, MARGIN]);

  if (isLoaded) {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Use system theme</Text>
        </View>
        <View style={styles.switchContainer}>
          <Switch value={switchValue} onValueChange={(switchValue) => UpdateSwitchValue(switchValue)} style={styles.switcher}/>
        </View>
      </View>
    );
  } else {
    return(
      <LoadingIndicator />
    );
  }
}
