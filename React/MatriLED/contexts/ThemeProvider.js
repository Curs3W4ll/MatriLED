import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { darkTheme, lightTheme } from '../helper/themes';

export const ThemeContext = createContext()

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  const value = await SecureStore.getItemAsync(key);

  return value;
}

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [storage, setStorage] = useState("");
  const [theme, setTheme] = useState(darkTheme);

  function getSystemTheme() {
    if (colorScheme === "light")
      return lightTheme;
    else
      return darkTheme;
  }

  const getColorTheme = async (colorScheme) => {
    const result = await getValueFor("didUseSystemTheme");

    if (result && result === "false")
      setTheme(darkTheme);
    else
      setTheme(getSystemTheme());
  }

  useEffect(() => {
    getColorTheme(colorScheme);
  }, []);


  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;
