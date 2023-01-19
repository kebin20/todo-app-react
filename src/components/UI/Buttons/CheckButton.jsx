import React from 'react';
import classes from './CheckButton.module.css';

function CheckButton(props) {
  return (
    <button
      type={props.type}
      className={classes.checkbutton}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default CheckButton;
