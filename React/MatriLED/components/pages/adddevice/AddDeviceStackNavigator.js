import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HelpButton from '../..//HelpButton';
import Help from '../help/Help';
import AddDevice from './AddDevice';

const Stack = createStackNavigator();

export default function AddDeviceStackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="AddDevice"
    screenOptions={({navigation}) => ({
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
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
