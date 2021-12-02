import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import LoadingIndicator from '../../LoadingIndicator';
import { useTheme } from '../../../contexts/ThemeProvider';
import { useLanguage } from '../../../contexts/LanguageProvider';
import { setStorageValue, getStorageValue } from '../../../helper/storage';

export default function SystemThemeSetting() {
  const { theme, UseSystemTheme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      height: theme.sizes.smallSection,
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
      marginLeft: theme.sizes.mediumMargin,
      fontSize: theme.sizes.title,
      color: theme.colors.text,
    },
    switcher: {
      marginRight: theme.sizes.mediumMargin,
    },
  });

  const { language } = useLanguage();

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
  }, []);

  if (isLoaded) {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{ language.systemThemeTitle }</Text>
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
