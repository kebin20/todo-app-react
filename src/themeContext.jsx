import React, { useState } from 'react';
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [bgTheme, setBgTheme] = useState('bg-dark');
  const [theme, setTheme] = useState('dark');

  function toggleBgTheme() {
    setBgTheme((prevTheme) => (prevTheme === 'light' ? 'bg-dark' : 'light'));
  }

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider
      value={{ bgTheme, theme, toggleBgTheme, toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
