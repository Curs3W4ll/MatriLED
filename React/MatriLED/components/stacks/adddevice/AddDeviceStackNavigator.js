import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddDevice from './AddDevice';

const Stack = createStackNavigator();

export default function AddDeviceStackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="AddDevice"
    screenOptions={() => ({
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
    })}
    >
      <Stack.Screen name="AddDevice" component={AddDevice} />
    </Stack.Navigator>
  );
}
