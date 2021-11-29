import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Switch, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import LoadingIndicator from '../../LoadingIndicator';
import { useTheme } from '../../../contexts/ThemeProvider';
import { setStorageValue, getStorageValue } from '../../../helper/storage';
import { purpleTheme, cyanTheme, redTheme, blueTheme } from '../../../helper/themes';

const {height, width} = Dimensions.get('screen');
const ITEM_HEIGHT = height * 0.1;
const SUBITEM_HEIGHT = ITEM_HEIGHT * 0.4;
const MARGIN = width * 0.07;

export default function Settings() {
  const { theme, UseSystemTheme, ChangeColorTheme } = useTheme();
  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ switchSystemThemeValue, setSwitchSystemThemeValue ] = useState(true);
  const [ usedLanguage, setUsedLanguage ] = useState("fr");
  const [ usedColorTheme, setUsedColorTheme ] = useState("fr");

  async function GetStoredValues() {
    const storedDidUseSystemTheme = await getStorageValue("didUseSystemTheme");
    const storedUsedLanguage = await getStorageValue("usedLanguage");
    const storedUsedColorTheme = await getStorageValue("usedColorTheme");

    if (storedDidUseSystemTheme && storedDidUseSystemTheme === "false")
      setSwitchSystemThemeValue(false);
    else
      setSwitchSystemThemeValue(true);

    if (storedUsedLanguage)
      setUsedLanguage(storedUsedLanguage);

    if (storedUsedColorTheme)
      setUsedColorTheme(storedUsedColorTheme);
    setIsLoaded(true);
  }

  function UpdateSystemThemeSwitchValue(switchValue) {
    if (switchValue) {
      setStorageValue("didUseSystemTheme", "true");
      UseSystemTheme();
    } else
      setStorageValue("didUseSystemTheme", "false");
    setSwitchSystemThemeValue(switchValue);
  }

  function UpdateLanguageSwitchValue(switchValue) {
    setStorageValue("usedLanguage", switchValue);
    setUsedLanguage(switchValue);
  }

  useEffect(() => {
    GetStoredValues();
  }, []);

  if (isLoaded) {
    return(
      <ScrollView style={[styles.mainContainer, {backgroundColor: theme.background}]}>
        <View style={styles.switchLanguageContainer}>
          <View style={styles.switchLanguageTextContainer}>
            <Text style={[styles.switchLanguageText, {color: theme.text}]}>Language</Text>
          </View>
          <View style={styles.switchLanguageChoicesContainer}>
            <TouchableOpacity style={styles.flagImageButton} onPress={() => UpdateLanguageSwitchValue("fr")}>
              <Image source={require('../../../assets/frFlag.png')} style={[styles.flagImage, usedLanguage !== "fr" ? {opacity: 0.5} : {}]} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.flagImageButton} onPress={() => UpdateLanguageSwitchValue("uk")}>
              <Image source={require('../../../assets/ukFlag.png')} style={[styles.flagImage, usedLanguage !== "uk" ? {opacity: 0.5} : {}]} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.switchSystemThemeContainer}>
          <View style={styles.switchSystemThemeTextContainer}>
            <Text style={[styles.switchSystemThemeText, {color: theme.text}]}>Use system theme</Text>
          </View>
          <View style={styles.switchSystemThemeSwitcherContainer}>
            <Switch value={switchSystemThemeValue} onValueChange={(switchValue) => UpdateSystemThemeSwitchValue(switchValue)} style={styles.switchSystemThemeSwitcher}/>
          </View>
        </View>
        <View style={styles.switchColorThemeContainer}>
          <View style={styles.switchColorThemeTextContainer}>
            <Text style={[styles.switchColorThemeText, {color: theme.text}]}>Color theme</Text>
          </View>
          <View style={styles.switchColorThemeSwitcherContainer}>
            <View style={styles.switchColorThemeSwitcherSubContainer}>
              <TouchableOpacity style={[styles.switchColorThemeButton, {backgroundColor: purpleTheme.main, borderColor: theme.text}, usedColorTheme === "purple" ? {borderWidth: 2} : {}]} onPress={() => ChangeColorTheme("purple")} />
              <TouchableOpacity style={[styles.switchColorThemeButton, {backgroundColor: cyanTheme.main, borderColor: theme.text}, usedColorTheme === "cyan" ? {borderWidth: 2} : {}]} onPress={() => ChangeColorTheme("cyan")} />
            </View>
            <View style={styles.switchColorThemeSwitcherSubContainer}>
              <TouchableOpacity style={[styles.switchColorThemeButton, {backgroundColor: redTheme.main, borderColor: theme.text}, usedColorTheme === "red" ? {borderWidth: 2} : {}]} onPress={() => ChangeColorTheme("red")} />
              <TouchableOpacity style={[styles.switchColorThemeButton, {backgroundColor: blueTheme.main, borderColor: theme.text}, usedColorTheme === "blue" ? {borderWidth: 2} : {}]} onPress={() => ChangeColorTheme("blue")} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return(
      <LoadingIndicator size="large" />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  switchLanguageContainer: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
  },
  switchLanguageTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 2,
  },
  switchLanguageText: {
    marginLeft: MARGIN,
    fontSize: 25,
  },
  switchLanguageChoicesContainer: {
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
  switchSystemThemeContainer: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
  },
  switchSystemThemeTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 2,
  },
  switchSystemThemeSwitcherContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  switchSystemThemeText: {
    marginLeft: MARGIN,
    fontSize: 25,
  },
  switchSystemThemeSwitcher: {
    marginRight: MARGIN,
  },
  switchColorThemeContainer: {
    height: ITEM_HEIGHT,
    flexDirection: 'row',
  },
  switchColorThemeTextContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 2,
  },
  switchColorThemeSwitcherContainer: {
    flex: 1,
  },
  switchColorThemeSwitcherSubContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  switchColorThemeButton: {
    flex: 1,
    margin: '5%',
  },
  switchColorThemeText: {
    marginLeft: MARGIN,
    fontSize: 25,
  },
});
