import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useTheme } from '../../../contexts/ThemeProvider';
import { useLanguage } from '../../../contexts/LanguageProvider';

export default function LanguageSetting() {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      height: theme.sizes.smallSection,
      flexDirection: 'row',
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      flex: 2,
    },
    text: {
      marginLeft: theme.sizes.mediumMargin,
      fontSize: theme.sizes.title,
      color: theme.colors.text,
    },
    switchContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    },
    flagImageButton: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
    },
    flagImage: {
      resizeMode: 'contain',
      flex: 0.7,
    },
  });

  const { language, ChangeLanguage } = useLanguage();

  return(
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{ language.languageTitle }</Text>
      </View>
      <View style={styles.switchContainer}>
        <TouchableOpacity style={styles.flagImageButton} onPress={() => ChangeLanguage("fr")}>
          <Image source={require('../../../assets/frFlag.png')} style={[styles.flagImage, language.id !== "fr" ? { opacity: 0.5 } : {}]} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flagImageButton} onPress={() => ChangeLanguage("en")}>
          <Image source={require('../../../assets/ukFlag.png')} style={[styles.flagImage, language.id !== "en" ? { opacity: 0.5 } : {}]} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
