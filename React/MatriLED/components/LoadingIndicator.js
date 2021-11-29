import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

export default function LoadingIndicator(props) {
  const { theme } = useTheme();

  return (
    <ActivityIndicator size={props.size ? props.size : "small"} style={[styles.activityIndicator, {backgroundColor: theme.background}]} />
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
  },
});
