import React from 'react';
import { View, StyleSheet } from 'react-native';
import DevicesStackNavigator from './DevicesStackNavigator';

export default function DevicesRoot() {
  return (
    <View style={styles.mainContainer}>
      <DevicesStackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
