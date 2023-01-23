import React from 'react';
import classes from './CheckButton.module.css';

function CheckButton(props) {
  const tickStyle = {
    background: props.isChecked
      ? `linear-gradient(153deg, rgba(34,193,195,0.4234068627450981) 0%, rgba(73,173,194,1) 27%, rgba(186,117,190,0.773546918767507) 58%)`
      : 'transparent',
    backgroundImage: props.isChecked ? "url(./tick-button.svg)" : "none",
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
