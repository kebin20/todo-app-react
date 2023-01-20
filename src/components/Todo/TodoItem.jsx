import React from 'react';
import classes from './TodoItem.module.css';
import CheckButton from './../UI/Buttons/CheckButton';
import DeleteButton from './../UI/Buttons/DeleteButton';

function TodoItem(props) {
  function deleteHandler() {
    props.onDelete(props.id);
  }

  return (
    <li className={classes.todoitem}>
      <CheckButton/>
      {props.children}
      <DeleteButton onClick={deleteHandler}/>
    </li>
  );
}

export default TodoItem;
