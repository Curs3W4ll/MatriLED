import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DevicesList from './DevicesList';
import DeviceDetails from './DeviceDetails';

const Stack = createStackNavigator();

export default function DevicesStackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Devices"
    screenOptions={() => ({
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
    })}
    >
      <Stack.Screen name="Devices" component={DevicesList} />
      <Stack.Screen name="Device" component={DeviceDetails} />
    </Stack.Navigator>
  );
}
