import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from '../helper/themes';

export const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  function getColorTheme(colorScheme) {
    if (colorScheme === 'light')
      return lightTheme;
    else
      return darkTheme;
  }

  const colorScheme = useColorScheme();
  const [theme] = useState(getColorTheme(colorScheme));

  return (
    <ThemeContext.Provider value={{ theme: theme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

export default ThemeProvider;
