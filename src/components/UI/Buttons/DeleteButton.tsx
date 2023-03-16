/* eslint-disable react/prop-types */
import React from "react";
import "./DeleteButton.css";
import { ButtonComponentType } from "src/interfaces";

function DeleteButton(props: ButtonComponentType) {
  return (
    <button type={props.type} className="delete-button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default DeleteButton;
