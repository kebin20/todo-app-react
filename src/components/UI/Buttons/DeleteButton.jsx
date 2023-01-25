/* eslint-disable react/prop-types */
import React from 'react';
import classes from './DeleteButton.module.css';

function DeleteButton(props) {
  return (
    <button
      type={props.type}
      className={classes.deletebutton}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default DeleteButton;