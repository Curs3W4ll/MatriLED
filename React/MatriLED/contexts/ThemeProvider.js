import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme, Dimensions } from 'react-native';
import * as Updates from 'expo-updates';
import { setStorageValue, getStorageValue } from '../helper/storage';
import { darkTheme, lightTheme, purpleTheme, cyanTheme, redTheme, blueTheme } from '../helper/colorThemes';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const [themeIsLoaded, setThemeIsLoaded] = useState(false);
  const [theme, setTheme] = useState({});

  function getSystemTheme() {
    if (colorScheme === "light")
      return lightTheme;
    else
      return darkTheme;
  }

  async function getColors() {
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
    actualTheme.main = colorTheme.main;
    actualTheme.sub = colorTheme.sub;
    actualTheme.colorThemeId = colorTheme.id;
    return actualTheme;
  }

  async function getSizes() {
    const { height, width } = Dimensions.get('screen');
    var sizeTheme = {};

    sizeTheme.label = height * 0.033;
    sizeTheme.title = height * 0.03;
    sizeTheme.text = height * 0.023;
    sizeTheme.note = height * 0.012;

    sizeTheme.section = height * 0.15;
    sizeTheme.smallSection = height * 0.1;
    sizeTheme.item = height * 0.15;

    sizeTheme.smallMargin = width * 0.02;
    sizeTheme.mediumMargin = width * 0.05;
    sizeTheme.bigMargin = width * 0.08;

    sizeTheme.bigIcon = width * 0.13;
    sizeTheme.mediumIcon = width * 0.07;
    sizeTheme.smallIcon = width * 0.04;

    return sizeTheme;
  }

  async function getTheme() {
    var actualTheme = {
      colors: {},
      sizes: {},
    };

    actualTheme.colors = await getColors();
    actualTheme.sizes = await getSizes();

    setTheme(actualTheme);
    setThemeIsLoaded(true);
  }

  useEffect(() => {
    getTheme();
  }, []);

  function ToggleBackTheme() {
    if (theme.colors.id === 'dark')
      setStorageValue("usedBackTheme", "light");
    else
      setStorageValue("usedBackTheme", "dark");
    setStorageValue("didUseSystemTheme", "false");
    getTheme();
  }

  async function ChangeColorTheme(newTheme) {
    setStorageValue("usedColorTheme", newTheme);
    if (newTheme !== theme.colors.colorThemeId)
      Updates.reloadAsync();
  }

  async function UseSystemTheme() {
    setStorageValue("didUseSystemTheme", "true");
    getTheme();
  }

  return (
    <ThemeContext.Provider value={{ theme, themeIsLoaded, ToggleBackTheme, ChangeColorTheme, UseSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;
