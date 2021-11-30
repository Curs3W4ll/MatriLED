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
      backgroundColor: theme.background,
    },
  });

  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: theme.text }}>Add Device</Text>
    </View>
  );
}
