import React, { useContext } from "react";
import "./ToggleThemeButton.css";
import { ThemeContext } from "../../../themeContext";

function ToggleThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className={`toggle-theme-button switch-to-${theme}-icon`}
    ></button>
  );
}

export default ToggleThemeButton;
