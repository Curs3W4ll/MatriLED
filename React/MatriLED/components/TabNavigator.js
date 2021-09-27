// components/TabNavigator.js
import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TranslucentTabBar from './TranslucentTabBar';
import Home from './Home';
import AddDevice from './AddDevice';
import Help from './Help';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color, size) => {
  let iconName;

  switch (route.name) {
    case 'Home':
      iconName = 'home';
      break;
    case 'Add Device':
      iconName = 'plus';
      break;
    case 'Help':
      iconName = 'question';
      break;
    default:
      break;
  }

  return <Icon name={iconName} color={color} size={size}/>;
}

function TabNavigator() {
  return (
    <Tab.Navigator
    tabBar={(props) => <TranslucentTabBar {...props} />}
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({color, size}) => screenOptions(route, color, size),
      tabBarActiveTintColor: '#c930e5',
      tabBarInactiveTintColor: 'white',
      tabBarStyle: styles.tabbar,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: 'black' },
    })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add Device" component={AddDevice} />
      <Tab.Screen name="Help" component={Help} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabbar: {
    borderTopColor: '#cccccc',
    backgroundColor: 'transparent',
  },
});
