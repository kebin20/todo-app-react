import React from 'react';
import classes from './TodoList.module.css';
import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <ul className={classes.todolist}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          isChecked={item.isChecked}
          onCheckItem={props.onCheckItem}
          id={item.id}
          onDelete={props.onDeleteItem}
          style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}
        >
          {item.text}
        </TodoItem>
      ))}
      <div className={classes.itemdisplay}>
        <p className={classes.itemsleft}>{props.items.length} items left</p>
        <button
          className={classes.clearcompletedbtn}
          onClick={props.onClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </ul>
  );
}

export default TodoList;
