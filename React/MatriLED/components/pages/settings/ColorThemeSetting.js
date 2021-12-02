import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LoadingIndicator from '../../LoadingIndicator';
import { useTheme } from '../../../contexts/ThemeProvider';
import { useLanguage } from '../../../contexts/LanguageProvider';
import { getStorageValue } from '../../../helper/storage';
import { purpleTheme, cyanTheme, redTheme, blueTheme } from '../../../helper/colorThemes';

export default function ColorThemeSetting() {
  const { theme, ChangeColorTheme } = useTheme();
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
      flex: 1,
    },
    switchSubContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    button: {
      flex: 1,
      margin: theme.sizes.smallMargin,
      borderColor: theme.colors.text,
    },
    text: {
      marginLeft: theme.sizes.mediumMargin,
      fontSize: theme.sizes.title,
      color: theme.colors.text,
    },
  });

  const { language } = useLanguage();

  const [ isLoaded, setIsLoaded ] = useState(false);
  const [ usedColorTheme, setUsedColorTheme ] = useState("fr");

  async function GetStoredValue() {
    const storedUsedColorTheme = await getStorageValue("usedColorTheme");

    if (storedUsedColorTheme)
      setUsedColorTheme(storedUsedColorTheme);

    setIsLoaded(true);
  }

  useEffect(() => {
    GetStoredValue();
  }, []);

  if (isLoaded) {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{ language.colorThemeTitle }</Text>
        </View>
        <View style={styles.switchContainer}>
          <View style={styles.switchSubContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: purpleTheme.main }, usedColorTheme === "purple" ? { borderWidth: 2 } : {}]} onPress={() => ChangeColorTheme("purple")} />
            <TouchableOpacity style={[styles.button, { backgroundColor: cyanTheme.main }, usedColorTheme === "cyan" ? { borderWidth: 2 } : {}]} onPress={() => ChangeColorTheme("cyan")} />
          </View>
          <View style={styles.switchSubContainer}>
            <TouchableOpacity style={[styles.button, { backgroundColor: redTheme.main }, usedColorTheme === "red" ? { borderWidth: 2 } : {}]} onPress={() => ChangeColorTheme("red")} />
            <TouchableOpacity style={[styles.button, { backgroundColor: blueTheme.main }, usedColorTheme === "blue" ? { borderWidth: 2 } : {}]} onPress={() => ChangeColorTheme("blue")} />
          </View>
        </View>
      </View>
    );
  } else {
    return(
      <LoadingIndicator />
    );
  }
}
