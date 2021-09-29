// components/Help.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Help() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Help</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
