import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../contexts/ThemeProvider';
import { lightTheme } from '../helper/themes';

const {height} = Dimensions.get('screen');
const ICON_HEIGHT = height * 0.03;

export default function SwapThemeButton() {
  const { theme, ToggleTheme } = useTheme();

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => ToggleTheme()}>
      <Ionicons name={theme.themeIcon} color={theme.main} size={ICON_HEIGHT}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ICON_HEIGHT / 2,
  }
});
