import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '../../../contexts/ThemeProvider';
import LanguageSetting from './LanguageSetting';
import SystemThemeSetting from './SystemThemeSetting';
import ColorThemeSetting from './ColorThemeSetting';

export default function Settings() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

  return(
    <ScrollView style={styles.mainContainer}>
      <LanguageSetting />
      <SystemThemeSetting />
      <ColorThemeSetting />
    </ScrollView>
  );
}
