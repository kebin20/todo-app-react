import React, { useContext } from 'react';
import "./ToggleThemeButton.css"
import { ThemeContext } from '../../../themeContext';

function ToggleThemeButton(props) {
  const { toggleTheme, toggleBgTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={(toggleTheme, toggleBgTheme)}
      className="toggle-theme-button"
    ></button>
  );
}

export default ToggleThemeButton;
