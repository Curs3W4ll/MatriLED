// components/DevicesList.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import DevicePreview from './DevicePreview';

export default function DevicesList() {
  const TABBARHEIGHT = useBottomTabBarHeight();

  return(
    <ScrollView style={styles.scrollView} contentContainerStyle={[{paddingBottom: TABBARHEIGHT}]}>
      <DevicePreview />
      <DevicePreview />
      <DevicePreview />
      <DevicePreview />
      <DevicePreview />
      <DevicePreview />
      <DevicePreview />
      <DevicePreview />
      <DevicePreview />
      <DevicePreview />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
});
