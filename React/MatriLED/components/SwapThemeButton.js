import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../contexts/ThemeProvider';

export default function SwapThemeButton() {
  const { theme, ToggleBackTheme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.sizes.mediumMargin,
    }
  });

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => ToggleBackTheme()}>
      <Ionicons name={theme.colors.themeIcon} color={theme.colors.main} size={theme.sizes.mediumIcon}/>
    </TouchableOpacity>
  );
}
