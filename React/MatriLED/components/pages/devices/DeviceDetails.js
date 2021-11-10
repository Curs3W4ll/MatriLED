import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from '../../../contexts/ThemeProvider';

export default function DeviceDetails() {
  const { theme } = useTheme();

  return (
    <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
      <Text style={{color: theme.text}}>Device details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
