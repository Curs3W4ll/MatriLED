import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../contexts/ThemeProvider';
import RootNavigator from './RootNavigator';

export default function Root() {
  const { theme, themeIsLoaded } = useTheme();
  const styles = StyleSheet.create({
    loadingIndicator: {
      flex: 1,
      backgroundColor: 'black',
    },
  })

  if (themeIsLoaded) {
    return (
      <>
        <StatusBar style={theme.colors.statusBar} />
        <RootNavigator />
      </>
    );
  } else {
    return (
      <>
        <StatusBar style="light" />
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      </>
    )
  }
};
