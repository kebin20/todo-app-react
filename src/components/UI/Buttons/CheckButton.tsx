/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { ThemeContext } from "../../../themeContext";

import "./CheckButton.css";
import tickButtonDarkMode from "./assets/icon-check-darkmode.svg";
import tickButtonLightMode from "./assets/icon-check-lightmode.svg";

function CheckButton(props) {
  const { theme } = useContext(ThemeContext);

  const tickStyle = {
    background: props.isChecked
      ? `linear-gradient(157deg, rgba(34,193,195,0.1460870343839542) 0%, rgba(73,173,194,0.15754835243553011) 27%, rgba(186,117,190,0.3495254297994269) 58%), center no-repeat url(${
          theme === "dark" ? tickButtonDarkMode : tickButtonLightMode
        })`
      : "transparent",
  };

  return (
    <button
      type={props.type}
      className={`${theme} check-button`}
      onClick={props.onClick}
      style={tickStyle}
    >
      {props.children}
    </button>
  );
}

export default CheckButton;
