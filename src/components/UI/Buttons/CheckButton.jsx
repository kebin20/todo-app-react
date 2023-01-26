/* eslint-disable react/prop-types */
import React from "react";
import classes from "./CheckButton.module.css";
import tickButton from "./assets/icon-check.svg";

function CheckButton(props) {
  const tickStyle = {
    background: props.isChecked
      ? `linear-gradient(157deg, rgba(34,193,195,0.1460870343839542) 0%, rgba(73,173,194,0.15754835243553011) 27%, rgba(186,117,190,0.3495254297994269) 58%), center no-repeat url(${tickButton})`
      : "transparent",
  };

  return (
    <button
      type={props.type}
      className={classes.checkbutton}
      onClick={props.onClick}
      style={tickStyle}
    >
      {props.children}
    </button>
  );
}

export default CheckButton;
