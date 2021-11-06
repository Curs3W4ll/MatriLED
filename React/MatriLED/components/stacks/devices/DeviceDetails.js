import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function DeviceDetails() {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Device details</Text>
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
