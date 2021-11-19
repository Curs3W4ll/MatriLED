import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { setStorageValue, getStorageValue } from '../helper/storage';
import { darkTheme, lightTheme } from '../helper/themes';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(darkTheme);

  function getSystemTheme() {
    if (colorScheme === "light")
      return lightTheme;
    else
      return darkTheme;
  }

  const getColorTheme = async () => {
    const didUseSystemTheme = await getStorageValue("didUseSystemTheme");

    if (didUseSystemTheme && didUseSystemTheme === "false") {
      const useTheme = await getStorageValue("usedTheme");

      if (useTheme && useTheme === "light")
        setTheme(lightTheme);
      else
        setTheme(darkTheme);
    } else
      setTheme(getSystemTheme());
  }

  useEffect(() => {
    getColorTheme(colorScheme);
  }, []);

  function ToggleTheme() {
    if (theme.id === 'dark') {
      setTheme(lightTheme);
      setStorageValue("usedTheme", "light");
    } else {
      setTheme(darkTheme);
      setStorageValue("usedTheme", "dark");
    }
    setStorageValue("didUseSystemTheme", "false");
  }

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;
