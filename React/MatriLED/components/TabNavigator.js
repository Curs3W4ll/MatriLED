import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '../contexts/ThemeProvider';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import TranslucentTabBar from './TranslucentTabBar';
import DevicesRoot from './pages/devices/DevicesRoot';
import AddDeviceRoot from './pages/adddevice/AddDeviceRoot';
import SettingsRoot from './pages/settings/SettingsRoot';

const Tab = createBottomTabNavigator();

const screenOptions = (route, color, size) => {
  switch (route.name) {
    case 'Devices List Tab':
      return <AntDesignIcon name={'home'} color={color} size={size}/>;
    case 'Add Device Tab':
      return <EntypoIcon name={'plus'} color={color} size={size}/>;
    case 'Settings Tab':
      return <AntDesignIcon name={'setting'} color={color} size={size}/>;
    default:
      break;
  }
}

export default function TabNavigator() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    tabBar: {
      backgroundColor: 'transparent',
      borderTopColor: theme.colors.annex,
    },
  });

  return (
    <Tab.Navigator
    tabBar={(props) => <TranslucentTabBar {...props} />}
    initialRouteName="Devices List Tab"
    screenOptions={({route}) => ({
      tabBarShowLabel: false,
      tabBarIcon: ({color, size}) => screenOptions(route, color, size),
      tabBarActiveTintColor: theme.colors.main,
      tabBarInactiveTintColor: theme.colors.text,
      tabBarStyle: styles.tabBar,
      headerShown: false,
    })}
    >
      <Tab.Screen name="Devices List Tab" component={DevicesRoot} />
      <Tab.Screen name="Add Device Tab" component={AddDeviceRoot} />
      <Tab.Screen name="Settings Tab" component={SettingsRoot} />
    </Tab.Navigator>
  );
};
