import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import LoadingIndicator from '../../LoadingIndicator';
import { useTheme } from '../../../contexts/ThemeProvider';
import DevicePreview from './DevicePreview';

export default function DevicesList({ navigation }) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    scrollView: {
      flex: 1,
      backgroundColor: theme.background,
    },
  });

  const TABBARHEIGHT = useBottomTabBarHeight();
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [TABBARHEIGHT]);

  if (isLoaded) {
    return(
      <ScrollView style={styles.scrollView} contentContainerStyle={[{ paddingBottom: TABBARHEIGHT }]}>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
        <DevicePreview navigation={navigation}/>
      </ScrollView>
    );
  } else {
    return(
      <LoadingIndicator size="large" />
    );
  }
}
