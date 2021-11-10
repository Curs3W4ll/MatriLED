import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../contexts/ThemeProvider';
import RootNavigator from './RootNavigator';

export default function Root() {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar style={theme.statusBar} />
      <RootNavigator />
    </>
  );
};
