// components/Home.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import DevicesList from './DevicesList';

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <DevicesList />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
});
