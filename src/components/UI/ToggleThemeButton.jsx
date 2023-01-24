import React, { useContext } from 'react';
import { ThemeContext } from '../../../themeContext';

function ToggleThemeButton(props) {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme} className={`${theme}-theme`}></button>;
}

export default ToggleThemeButton;
