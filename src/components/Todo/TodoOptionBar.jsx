import React from 'react';
import classes from './TodoOptionBar.module.css';

function TodoOptionBar({
  onShowCompletedItems,
  onShowActiveItems,
  onShowAllItems,
}) {
  return (
    <div className={classes.optionbar}>
      <button className={classes.optionbutton} onClick={onShowAllItems}>
        All
      </button>
      <button className={classes.optionbutton} onClick={onShowActiveItems}>
        Active
      </button>
      <button className={classes.optionbutton} onClick={onShowCompletedItems}>
        Completed
      </button>
    </div>
  );
}

export default TodoOptionBar;
