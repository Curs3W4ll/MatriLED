import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../contexts/ThemeProvider';

export default function AddDevice() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.background,
    },
    text: {
      fontSize: theme.sizes.text,
      color: theme.colors.text,
    }
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Add Device</Text>
    </View>
  );
}
