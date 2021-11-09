import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const {height} = Dimensions.get('screen');
const ICON_HEIGHT = height * 0.03;

export default function HelpButton({ navigation }) {
  return (
    <TouchableOpacity style={styles.mainContainer} onPress={() => navigation.navigate("Help")}>
      <EntypoIcon name={'help'} color={'#c930e5'} size={ICON_HEIGHT}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: ICON_HEIGHT / 2,
  }
});
