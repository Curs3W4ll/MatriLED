// components/TranslucentTabBar.js
import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

export default function CustomTabBar(props) {
  return (
    <BlurView
    style={styles.blurView}
    tint="dark"
    intensity={80}>
      <BottomTabBar {...props} />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  blurView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
