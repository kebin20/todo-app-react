/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./TodoOptionBar.css";
import { ThemeContext } from "../../themeContext";

function TodoOptionBar({
  onShowCompletedItems,
  onShowActiveItems,
  onShowAllItems,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} option-bar`}>
      <button className={`${theme} option-button`} onClick={onShowAllItems}>
        All
      </button>
      <button className={`${theme} option-button`} onClick={onShowActiveItems}>
        Active
      </button>
      <button
        className={`${theme} option-button`}
        onClick={onShowCompletedItems}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoOptionBar;
