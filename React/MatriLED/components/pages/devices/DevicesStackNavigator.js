import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../../../contexts/ThemeProvider';
import { useLanguage } from '../../../contexts/LanguageProvider';
import SwapThemeButton from '../../SwapThemeButton';
import Help from '../help/Help';
import DevicesList from './DevicesList';
import DeviceDetails from './DeviceDetails';

const Stack = createStackNavigator();

export default function DevicesStackNavigator() {
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
    initialRouteName="Devices"
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
      name="Devices"
      component={DevicesList}
      options={{
        title: language.devicesLabel,
      }}
      />
      <Stack.Screen name="Device" component={DeviceDetails} />
    </Stack.Navigator>
  );
}
