import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../../../contexts/ThemeProvider';
import SwapThemeButton from '../../SwapThemeButton';
import Help from '../help/Help';
import Settings from './Settings';

const Stack = createStackNavigator();

export default function SettingsStackNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
    initialRouteName="Settings"
    screenOptions={({ navigation }) => ({
      headerTintColor: theme.text,
      headerStyle: { backgroundColor: theme.background },
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
