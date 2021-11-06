import React from 'react';
import { StyleSheet } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TranslucentTabBar from './TranslucentTabBar';
import DevicesRoot from './stacks/devices/DevicesRoot';
import AddDeviceRoot from './stacks/adddevice/AddDeviceRoot';
import HelpRoot from './stacks/help/HelpRoot';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color, size) => {
  switch (route.name) {
    case 'Devices':
      return <AntDesignIcon name={'home'} color={color} size={size}/>;
    case 'Add Device':
      return <EntypoIcon name={'plus'} color={color} size={size}/>;
    case 'Help':
      return <EntypoIcon name={'help'} color={color} size={size}/>;
    default:
      break;
  }
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
    tabBar={(props) => <TranslucentTabBar {...props} />}
    initialRouteName="Devices"
    screenOptions={({route}) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({color, size}) => screenOptions(route, color, size),
      tabBarActiveTintColor: '#c930e5',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: styles.tabBar,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
      headerShown: false,
    })}
    >
      <Tab.Screen name="Devices" component={DevicesRoot} />
      <Tab.Screen name="Add Device" component={AddDeviceRoot} />
      <Tab.Screen name="Help" component={HelpRoot} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: '#cccccc',
    backgroundColor: 'transparent',
  },
});
