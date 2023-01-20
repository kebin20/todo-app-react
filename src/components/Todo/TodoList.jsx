import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul className={classes.todolist}>
      {props.items.map((item) => (
        <TodoItem key={item.id} id={item.id} onDelete={props.onDeleteItem}>
          {item.text}
        </TodoItem>
      ))}
    </ul>
  );
}

export default TodoList;
