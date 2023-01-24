import React, { useState, useContext } from 'react';
import './TodoInput.css';
import CheckButton from './../UI/Buttons/CheckButton';
import { ThemeContext } from '../../themeContext';

function TodoInput(props) {
  const [enteredValue, setEnteredValue] = useState('Create a new todo...');

  const { theme } = useContext(ThemeContext);

  function todoInputChangeHandler(e) {
    setEnteredValue(e.target.value);
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    props.onAddTodo(enteredValue);
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${theme}-theme form`}>
        <CheckButton type="submit">+</CheckButton>
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
