import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddDeviceStackNavigator from './AddDeviceStackNavigator';

export default function AddDeviceRoot() {
  return (
    <View style={styles.mainContainer}>
      <AddDeviceStackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
