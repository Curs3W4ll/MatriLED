import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddDeviceStackNavigator from './AddDeviceStackNavigator';

export default function AddDeviceRoot() {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <AddDeviceStackNavigator />
    </View>
  );
}
