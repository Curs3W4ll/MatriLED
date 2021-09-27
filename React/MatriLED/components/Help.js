// components/Help.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Help() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Help</Text>
    </View>
  );
}

export default Help;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});
