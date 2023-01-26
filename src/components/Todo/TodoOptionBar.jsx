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
      <button
        className={`${theme} option-button`}
        onClick={onShowAllItems}
        id="no-border"
      >
        All
      </button>
      <button
        className={`${theme} option-button`}
        onClick={onShowActiveItems}
        id="no-border"
      >
        Active
      </button>
      <button
        className={`${theme} option-button`}
        onClick={onShowCompletedItems}
        id="no-border"
      >
        Completed
      </button>
    </div>
  );
}

export default TodoOptionBar;
