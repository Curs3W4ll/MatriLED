import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import * as Updates from 'expo-updates';
import { setStorageValue, getStorageValue } from '../helper/storage';
import { darkTheme, lightTheme, purpleTheme, cyanTheme, redTheme, blueTheme } from '../helper/themes';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [themeIsLoaded, setThemeIsLoaded] = useState(false);
  const [theme, setTheme] = useState(darkTheme);

  function getSystemTheme() {
    if (colorScheme === "light")
      return lightTheme;
    else
      return darkTheme;
  }

  const getColorTheme = async () => {
    const didUseSystemTheme = await getStorageValue("didUseSystemTheme");
    const usedBackTheme = await getStorageValue("usedBackTheme");
    const usedColorTheme = await getStorageValue("usedColorTheme");
    var actualTheme = getSystemTheme();
    var colorTheme = purpleTheme;

    if (didUseSystemTheme && didUseSystemTheme === "false") {
      if (usedBackTheme && usedBackTheme === "light")
        actualTheme = lightTheme;
      else
        actualTheme = darkTheme;
    }
    if (usedColorTheme) {
      if (usedColorTheme === "purple")
        colorTheme = purpleTheme;
      else if (usedColorTheme === "cyan")
        colorTheme = cyanTheme;
      else if (usedColorTheme === "red")
        colorTheme = redTheme;
      else if (usedColorTheme === "blue")
        colorTheme = blueTheme;
    }
    actualTheme["main"] = colorTheme.main;
    actualTheme["sub"] = colorTheme.sub;
    actualTheme["colorThemeId"] = colorTheme.id;
    setTheme(actualTheme);
    setThemeIsLoaded(true);
  }

  useEffect(() => {
    getColorTheme(colorScheme);
  }, []);

  function ToggleBackTheme() {
    if (theme.id === 'dark')
      setStorageValue("usedBackTheme", "light");
    else
      setStorageValue("usedBackTheme", "dark");
    setStorageValue("didUseSystemTheme", "false");
    getColorTheme();
  }

  async function ChangeColorTheme(newTheme) {
    setStorageValue("usedColorTheme", newTheme);
    if (newTheme !== theme.colorThemeId)
      Updates.reloadAsync();
  }

  async function UseSystemTheme() {
    setStorageValue("didUseSystemTheme", "true");
    getColorTheme();
  }

  return (
    <ThemeContext.Provider value={{ theme, themeIsLoaded, ToggleBackTheme, ChangeColorTheme, UseSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;
