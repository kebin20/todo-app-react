/* eslint-disable react/prop-types */
import React, { useState, useContext } from 'react';
import './TodoInput.css';
import CheckButton from './../UI/Buttons/CheckButton';
import { ThemeContext } from '../../themeContext';

function TodoInput(props) {
  const [enteredValue, setEnteredValue] = useState('');

  const { theme } = useContext(ThemeContext);

  function todoInputChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    props.onAddTodo(enteredValue);
    setEnteredValue("")
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${theme} form-container`}>
        <CheckButton type="submit">+</CheckButton>
        <input
          className={theme}
          value={enteredValue}
          id="no-border"
          placeholder="Create a new todo..."
          type="text"
          onChange={todoInputChangeHandler}
        />
      </div>
    </form>
  );
}

export default TodoInput;
