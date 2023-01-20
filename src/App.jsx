import React, { useState } from 'react';
import classes from './App.module.css';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';

function App() {
  const [todoItem, setTodoItem] = useState([
    { text: 'Complete online Javascript course', id: '1' },
    { text: 'Jog around the park 3x', id: '2' },
  ]);

  function addTodoHandler(enteredText) {
    setTodoItem((prevTodoItem) => {
      const updatedTodo = [...prevTodoItem];
      updatedTodo.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodo;
    });
  }

  function deleteTodoHandler(itemId) {
    setTodoItem(prevTodoItem => {
      const updatedTodo = prevTodoItem.filter(item.id !== itemId)
      return updatedTodo;
    })
  }

  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <h1 className={classes.nav__title}>Todo</h1>
          <button className={classes.nav__togglethemebutton}></button>
        </nav>
        <TodoInput onAddTodo={addTodoHandler}/>
      </header>
      <section>
        <TodoList items={todoItem} onDelete={deleteTodoHandler}/>
      </section>
    </React.Fragment>
  );
}

export default App;
