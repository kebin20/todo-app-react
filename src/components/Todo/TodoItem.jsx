import React from 'react';
import classes from './TodoItem.module.css';
import CheckButton from './../UI/Buttons/CheckButton';
import DeleteButton from './../UI/Buttons/DeleteButton';

function TodoItem(props) {
  function deleteHandler() {
    props.onDelete(props.id);
  }

  return (
    <li className={classes.todoitem} style={props.style}>
      <CheckButton
        onClick={() => {
          console.log('onCheckItem called');
          props.onCheckItem(props.id);
        }}
        isChecked={props.isChecked}
      />
      {props.children}
      <DeleteButton onClick={deleteHandler}></DeleteButton>
    </li>
  );
}

export default TodoItem;
