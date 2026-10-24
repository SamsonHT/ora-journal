import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sidebarTheme, setSidebarTheme] = useState('maroon');
  const [isTopNav, setIsTopNav] = useState(false); // <-- ADDED

  return (
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      setIsDarkMode,
      sidebarTheme, 
      setSidebarTheme,
      isTopNav,       // <-- ADDED
      setIsTopNav     // <-- ADDED
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}