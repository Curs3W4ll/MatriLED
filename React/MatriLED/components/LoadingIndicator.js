import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeProvider';

export default function LoadingIndicator(props) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    activityIndicator: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <ActivityIndicator size={ props.size ? props.size : "small" } style={styles.activityIndicator} />
  );
};
