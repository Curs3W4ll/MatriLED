// components/AddDevice.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function AddDevice () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Device</Text>
    </View>
  );
}

export default AddDevice;

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
