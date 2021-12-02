import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../../../contexts/ThemeProvider';
import { useLanguage } from '../../../contexts/LanguageProvider';
import SwapThemeButton from '../../SwapThemeButton';
import Help from '../help/Help';
import AddDevice from './AddDevice';

const Stack = createStackNavigator();

export default function AddDeviceStackNavigator() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    headerStyle: {
      backgroundColor: theme.colors.background,
    },
    headerTitleStyle: {
      fontSize: theme.sizes.label,
      fontWeight: "bold",
    },
  });

  const { language } = useLanguage();

  return (
    <Stack.Navigator
    initialRouteName="Add device"
    screenOptions={() => ({
      headerTintColor: theme.colors.text,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerRight: () => (
        <SwapThemeButton />
      ),
    })}
    >
      <Stack.Screen
      name="Help"
      component={Help}
      options={{
        title: language.helpLabel,
      }}
      />
      <Stack.Screen
      name="Add device"
      component={AddDevice}
      options={{
        title: language.addDeviceLabel,
      }}
    />
    </Stack.Navigator>
  );
}
