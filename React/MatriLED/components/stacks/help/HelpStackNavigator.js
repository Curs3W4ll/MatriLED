import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Helpa from './Helpa';
import Helpb from './Helpb';

const Stack = createStackNavigator();

export default function HelpStackNavigator() {
  return (
    <Stack.Navigator
    initialRouteName="Helpa"
    screenOptions={() => ({
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
    })}
    >
      <Stack.Screen name="Helpa" component={Helpa} />
      <Stack.Screen name="Helpb" component={Helpb} />
    </Stack.Navigator>
  );
}
