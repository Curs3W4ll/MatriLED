import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../../../contexts/ThemeProvider';
import { useLanguage } from '../../../contexts/LanguageProvider';
import SwapThemeButton from '../../SwapThemeButton';
import Help from '../help/Help';
import Settings from './Settings';

const Stack = createStackNavigator();

export default function SettingsStackNavigator() {
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
    initialRouteName="Settings"
    screenOptions={() => ({
      headerTintColor: theme.colors.text,
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      headerRight: () => (
        <SwapThemeButton />
      )
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
      name="Settings"
      component={Settings}
      options={{
        title: language.settingsLabel,
      }}
      />
    </Stack.Navigator>
  );
}
