import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useTheme } from '../../../contexts/ThemeProvider';
import DevicePreview from './DevicePreview';

export default function DevicesList({ navigation }) {
  const { theme } = useTheme();
  const TABBARHEIGHT = useBottomTabBarHeight();

  return(
    <ScrollView style={[styles.scrollView], { backgroundColor: theme.background }} contentContainerStyle={[{paddingBottom: TABBARHEIGHT}]}>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
      <DevicePreview navigation={navigation}/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
