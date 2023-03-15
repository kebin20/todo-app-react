import React, { useContext } from "react";
import "./TodoOptionBar.css";
import { ThemeContext } from "../../themeContext";

function TodoOptionBar({
  onShowCompletedTodos,
  onShowActiveTodos,
  onShowAllTodos,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} option-bar`}>
      <button
        className={`${theme} option-button`}
        onClick={onShowAllTodos}
        id="no-border"
      >
        All
      </button>
      <button
        className={`${theme} option-button`}
        onClick={onShowActiveTodos}
        id="no-border"
      >
        Active
      </button>
      <button
        className={`${theme} option-button`}
        onClick={onShowCompletedTodos}
        id="no-border"
      >
        Completed
      </button>
    </div>
  );
}

export default TodoOptionBar;
