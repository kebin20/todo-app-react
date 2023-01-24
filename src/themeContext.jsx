import React, { useState } from 'react';
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
  const [bgDarkTheme, setBgDarkTheme] = useState('bg-dark');
  const [darkTheme, setDarkTheme] = useState('dark');

  function toggleBgTheme() {
    setBgDarkTheme((prevTheme) =>
      prevTheme === 'light' ? 'bg-dark' : 'light'
    );
  }

  function toggleTheme() {
    setDarkTheme((prevTheme) =>
      prevTheme === 'light' ? 'dark' : 'light'
    );
  }

  return (
    <ThemeContext.Provider
      value={{ bgDarkTheme, darkTheme, toggleBgTheme, toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContextProvider, ThemeContext };
