import React from 'react';
import { View, StyleSheet } from 'react-native';
import DevicesStackNavigator from './DevicesStackNavigator';

export default function DevicesRoot() {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <DevicesStackNavigator />
    </View>
  );
}
