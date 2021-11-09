import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Helpa() {
  return(
    <View style={styles.mainContainer}>
      <Text style={{color: 'white'}}>Help</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
