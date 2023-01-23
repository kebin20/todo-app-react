import React, { useState } from 'react';
import classes from './App.module.css';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';

function App() {
  const [todoItem, setTodoItem] = useState([
    { text: 'Complete online Javascript course', id: '1', isChecked: false },
    { text: 'Jog around the park 3x', id: '2', isChecked: false },
    { text: '10 minutes meditation', id: '3', isChecked: false },
  ]);

  function addTodoHandler(enteredText) {
    setTodoItem((prevTodoItem) => {
      const updatedTodo = [...prevTodoItem];
      updatedTodo.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedTodo;
    });
  }

  function deleteTodoHandler(itemId) {
    setTodoItem((prevTodoItem) => {
      const updatedTodo = prevTodoItem.filter((item) => item.id !== itemId);
      return updatedTodo;
    });
  }

  function checkItem(itemId) {
    setTodoItem((prevTodoItem) => {
      const updatedTodo = prevTodoItem.map((todo) => {
        if (todo.id === itemId) {
          console.log('Before toggle: ', todo.isChecked);
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        }
        return todo;
      });
      console.log(
        'After toggle: ',
        updatedTodo.find((item) => item.id === itemId).isChecked
      );
      return updatedTodo;
    });
  }

  return (
    <React.Fragment>
      <header className={classes.header}>
        <nav className={classes.nav}>
          <h1 className={classes.nav__title}>Todo</h1>
          <button className={classes.nav__togglethemebutton}></button>
        </nav>
        <TodoInput onAddTodo={addTodoHandler} />
      </header>
      <main>
        <TodoList
          items={todoItem}
          onCheckItem={(id) => checkItem(id)}
          onDeleteItem={deleteTodoHandler}
        />
      </main>
    </React.Fragment>
  );
}

export default App;
