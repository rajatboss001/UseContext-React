import { createContext, useState, useContext } from 'react';

// Create ThemeContext
export const ThemeContext = createContext();

// ThemeProvider Component to manage dark/light mode state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook helper (optional convenience)
export const useTheme = () => useContext(ThemeContext);
