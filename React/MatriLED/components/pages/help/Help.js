import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../contexts/ThemeProvider';

export default function Helpa() {
  const { theme } = useTheme();

  return(
    <View style={[styles.mainContainer, {backgroundColor: theme.background}]}>
      <Text style={{color: theme.text}}>Help</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
