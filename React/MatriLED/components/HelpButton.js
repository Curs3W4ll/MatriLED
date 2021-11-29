import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import LoadingIndicator from './LoadingIndicator';
import { useTheme } from '../contexts/ThemeProvider';

const {height} = Dimensions.get('screen');

const ICON_HEIGHT = height * 0.03;

export default function HelpButton({ navigation }) {
  const { theme } = useTheme();
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, [ICON_HEIGHT]);

  if (isLoaded) {
    return (
      <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate("Help")}>
        <EntypoIcon name={'help'} color={theme.main} size={ICON_HEIGHT}/>
      </TouchableOpacity>
    );
  } else {
    return(
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
