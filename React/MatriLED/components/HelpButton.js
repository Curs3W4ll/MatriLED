import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { useTheme } from '../contexts/ThemeProvider';

export default function HelpButton({ navigation }) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: smallMargin,
    }
  });

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate("Help")}>
      <EntypoIcon name={'help'} color={theme.colors.main} size={theme.sizes.mediumIcon}/>
    </TouchableOpacity>
  );
}
