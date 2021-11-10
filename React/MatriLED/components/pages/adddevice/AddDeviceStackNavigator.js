import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from '../../../contexts/ThemeProvider';
import HelpButton from '../..//HelpButton';
import Help from '../help/Help';
import AddDevice from './AddDevice';

const Stack = createStackNavigator();

export default function AddDeviceStackNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
    initialRouteName="AddDevice"
    screenOptions={({navigation}) => ({
      headerTintColor: theme.text,
      headerStyle: { backgroundColor: theme.background },
      headerRight: () => (
        <HelpButton navigation={navigation} />
      ),
    })}
    >
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="AddDevice" component={AddDevice} />
    </Stack.Navigator>
  );
}
