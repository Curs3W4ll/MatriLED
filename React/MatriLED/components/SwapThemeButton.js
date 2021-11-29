import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoadingIndicator from './LoadingIndicator';
import { useTheme } from '../contexts/ThemeProvider';

const {height} = Dimensions.get('screen');

const ICON_HEIGHT = height * 0.03;

export default function SwapThemeButton() {
  const { theme, ToggleBackTheme } = useTheme();
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [ICON_HEIGHT]);

  if (isLoaded) {
    return (
      <TouchableOpacity style={styles.mainContainer} onPress={() => ToggleBackTheme()}>
        <Ionicons name={theme.themeIcon} color={theme.main} size={ICON_HEIGHT}/>
      </TouchableOpacity>
    );
  } else {
    return (
      <LoadingIndicator />
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ICON_HEIGHT / 2,
  }
});
