import React from 'react';
import { View, StyleSheet } from 'react-native';
import HelpStackNavigator from './HelpStackNavigator';

export default function HelpRoot() {
  return (
    <View style={styles.mainContainer}>
      <HelpStackNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});
