import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Settings() {
  return(
    <View style={styles.mainContainer}>
      <Text style={{color:'white'}}>Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
