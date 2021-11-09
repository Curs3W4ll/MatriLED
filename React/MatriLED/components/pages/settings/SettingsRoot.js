import React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingsStackNavigator from './SettingsStackNavigator';

export default function SettingsRoot() {
  return (
    <View style={styles.mainContainer}>
      <SettingsStackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
