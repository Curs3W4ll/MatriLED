import React from 'react';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './components/RootNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <RootNavigator />
    </>
  );
}
