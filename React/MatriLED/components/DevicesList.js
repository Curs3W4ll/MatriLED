// components/DevicesList.js
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Device from './Device';

export default function DevicesList() {
  const TABBARHEIGHT = useBottomTabBarHeight();

  return(
    <ScrollView style={styles.scrollView} contentContainerStyle={[{paddingBottom: TABBARHEIGHT}]}>
      <Device />
      <Device />
      <Device />
      <Device />
      <Device />
      <Device />
      <Device />
      <Device />
      <Device />
      <Device />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
