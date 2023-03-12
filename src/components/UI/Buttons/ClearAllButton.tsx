import React, { useContext } from 'react';

import { ThemeContext } from '../../../themeContext';
import './ClearAllButton.css';

function ClearAllBtn(props) {
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
