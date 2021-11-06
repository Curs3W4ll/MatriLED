import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

export default function Helpa({ navigation }) {
  return(
    <TouchableOpacity onPress={() => navigation.navigate("Helpb")} style={styles.mainContainer}>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
