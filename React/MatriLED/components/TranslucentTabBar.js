// components/TranslucentTabBar.js
import React from 'react';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';

function CustomTabBar(props) {
  return (
    <BlurView
    style={{
    position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    }}
    tint="dark"
    intensity={90}>
      <BottomTabBar {...props} />
    </BlurView>
  );
};

export default CustomTabBar;
