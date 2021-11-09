import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import DevicePreview from './DevicePreview';

export default function DevicesList({ navigation }) {
  const TABBARHEIGHT = useBottomTabBarHeight();

  return(
    <ScrollView style={styles.scrollView} contentContainerStyle={[{paddingBottom: TABBARHEIGHT}]}>
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
    backgroundColor: 'black',
    flex: 1,
  },
});
