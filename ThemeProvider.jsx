import {View, Text} from 'react-native';
import React, {createContext, useContext, useState} from 'react';
import {useSharedValue} from 'react-native-reanimated';
import Presist from './Presist';
import {Dark, Light} from './Theme/Presentation';

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(
    Presist.getBoolean('darkMode') ?? false,
  );

  const THEME = isDarkMode ? Dark : Light;

  return (
    <ThemeContext.Provider value={{THEME, isDarkMode, setIsDarkMode}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);