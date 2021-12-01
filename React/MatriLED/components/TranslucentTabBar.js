import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { useTheme } from '../contexts/ThemeProvider';

export default function CustomTabBar(props) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    blurView: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  return (
    <BlurView
    style={styles.blurView}
    tint={theme.colors.tabBar}
    intensity={80}>
      <BottomTabBar {...props} />
    </BlurView>
  );
};
