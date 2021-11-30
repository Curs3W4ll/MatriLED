import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../contexts/ThemeProvider';

export default function Helpa() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.background,
    },
    text: {
      color: theme.text,
    },
  });

  return(
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Help</Text>
    </View>
  );
}
