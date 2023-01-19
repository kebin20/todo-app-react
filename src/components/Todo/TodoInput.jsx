import React, { useState } from 'react';
import classes from './TodoInput.module.css';
import CheckButton from './../UI/Buttons/CheckButton';

function TodoInput(props) {
  const [enteredValue, setEnteredValue] = useState('Create a new todo...');

  function todoInputChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    props.onAddTodo(enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.form}>
        <CheckButton />
        <input
          placeholder="Create a new todo..."
          type="text"
          onChange={todoInputChangeHandler}
        />
      </div>
    </form>
  );
}

export default TodoInput;
