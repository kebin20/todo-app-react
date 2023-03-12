/* eslint-disable react/prop-types */
import React from "react";
import "./DeleteButton.css";

function DeleteButton(props) {
  return (
    <button type={props.type} className="delete-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default DeleteButton;
