import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HelpButton from '../../HelpButton';
import Help from '../help/Help';
import DevicesList from './DevicesList';
import DeviceDetails from './DeviceDetails';

const Stack = createStackNavigator();

export default function DevicesStackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Devices"
    screenOptions={({ navigation }) => ({
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
      headerRight: () => (
        <HelpButton navigation={navigation} />
      ),
    })}
    >
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Devices" component={DevicesList} />
      <Stack.Screen name="Device" component={DeviceDetails} />
    </Stack.Navigator>
  );
}
