import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import LoadingIndicator from '../../LoadingIndicator';
import { useTheme } from '../../../contexts/ThemeProvider';
import { getStorageValue } from '../../../helper/storage';
import { purpleTheme, cyanTheme, redTheme, blueTheme } from '../../../helper/themes';

const {height, width} = Dimensions.get('screen');

const ITEM_HEIGHT = height * 0.1;
const SUBITEM_HEIGHT = ITEM_HEIGHT * 0.4;
const MARGIN = width * 0.07;

export default function ColorThemeSetting() {
  const { theme, ChangeColorTheme } = useTheme();
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
      flex: 1,
    },
    switchSubContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    button: {
      flex: 1,
      margin: '5%',
      borderColor: theme.text,
    },
    text: {
      marginLeft: MARGIN,
      fontSize: 25,
      color: theme.text,
    },
  });

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
  }, [ITEM_HEIGHT, SUBITEM_HEIGHT, MARGIN]);

  if (isLoaded) {
    return(
      <View style={styles.mainContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Color theme</Text>
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
