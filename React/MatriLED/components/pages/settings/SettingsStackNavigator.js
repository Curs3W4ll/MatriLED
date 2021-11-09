import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HelpButton from '../..//HelpButton';
import Help from '../help/Help';
import Settings from './Settings';

const Stack = createStackNavigator();

export default function SettingsStackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Settings"
    screenOptions={({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
      headerRight: () => (
        <HelpButton navigation={navigation} />
      ),
    })}
    >
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}
