import React from 'react';
import classes from './TodoOptionBar.module.css';

function TodoOptionBar(props) {
  return (
    <div className={classes.optionbar}>
      <button className={classes.optionbutton}>All</button>
      <button className={classes.optionbutton}>Active</button>
      <button className={classes.optionbutton}>Completed</button>
    </div>
  );
}

export default TodoOptionBar;
