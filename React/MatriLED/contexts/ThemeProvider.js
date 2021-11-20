import React, { createContext, useContext, useState, useLayoutEffect } from 'react';
import { useColorScheme } from 'react-native';
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
    // const usedColorTheme = await getStorageValue("usedColorTheme");
    const usedColorTheme = "blue";
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
    setTheme(actualTheme);
    setThemeIsLoaded(true);
  }

  useLayoutEffect(() => {
    getColorTheme(colorScheme);
  }, []);

  function ToggleTheme() {
    var newTheme = theme;

    if (theme.id === 'dark') {
      newTheme = lightTheme;
      setStorageValue("usedTheme", "light");
    } else {
      newTheme = darkTheme;
      setStorageValue("usedTheme", "dark");
    }
    newTheme["main"] = theme.main;
    newTheme["sub"] = theme.sub;
    setTheme(newTheme);
    setStorageValue("didUseSystemTheme", "false");
  }

  return (
    <ThemeContext.Provider value={{ theme, themeIsLoaded, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;
