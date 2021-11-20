import React from 'react';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../contexts/ThemeProvider';
import RootNavigator from './RootNavigator';

export default function Root() {
  const { theme, themeIsLoaded } = useTheme();

  if (themeIsLoaded) {
    return (
      <>
        <StatusBar style={theme.statusBar} />
        <RootNavigator />
      </>
    );
  } else {
    return (
      <>
       <ActivityIndicator />
      </>
    )
  }
};
