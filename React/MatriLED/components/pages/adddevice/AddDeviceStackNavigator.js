import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../../../contexts/ThemeProvider';
import SwapThemeButton from '../../SwapThemeButton';
import Help from '../help/Help';
import AddDevice from './AddDevice';

const Stack = createStackNavigator();

export default function AddDeviceStackNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
    initialRouteName="AddDevice"
    screenOptions={() => ({
      headerTintColor: theme.text,
      headerStyle: { backgroundColor: theme.background },
      headerRight: () => (
        <SwapThemeButton />
      ),
    })}
    >
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="AddDevice" component={AddDevice} />
    </Stack.Navigator>
  );
}
