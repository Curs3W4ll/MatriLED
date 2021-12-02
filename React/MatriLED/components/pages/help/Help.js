import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../../contexts/ThemeProvider';
import { useLanguage } from '../../../contexts/LanguageProvider';

export default function Helpa() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
    },
    text: {
      fontSize: theme.sizes.text,
      color: theme.colors.text,
    },
  });

  const { language } = useLanguage();

  return(
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{ language.helpLabel }</Text>
    </View>
  );
}
