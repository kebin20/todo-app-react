import React, { useContext } from "react";

import { ThemeContext } from "../../../themeContext";
import "./ClearAllButton.css";

function ClearAllBtn(props: {
  onClearAllTodos: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`${theme} clear-all-btn`}
      onClick={props.onClearAllTodos}
    >
      Clear All Todos
    </button>
  );
}

export default ClearAllBtn;
