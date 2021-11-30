import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../../../contexts/ThemeProvider';
import SwapThemeButton from '../../SwapThemeButton';
import Help from '../help/Help';
import Settings from './Settings';

const Stack = createStackNavigator();

export default function SettingsStackNavigator() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: theme.background,
    }
  });

  return (
    <Stack.Navigator
    initialRouteName="Settings"
    screenOptions={() => ({
      headerTintColor: theme.text,
      headerStyle: styles.headerStyle,
      headerRight: () => (
        <SwapThemeButton />
      )
    })}
    >
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
