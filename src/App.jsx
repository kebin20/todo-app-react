import React, { useState } from 'react';
import classes from './App.module.css';
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';
import TodoOptionBar from './components/Todo/TodoOptionBar';

function App() {
  const [todoItem, setTodoItem] = useState([
    { text: 'Complete online Javascript course', id: '1', isChecked: false },
    { text: 'Jog around the park 3x', id: '2', isChecked: false },
    { text: '10 minutes meditation', id: '3', isChecked: false },
    { text: 'Read for 1 hour', id: '4', isChecked: false },
    { text: 'Pick up groceries', id: '5', isChecked: false },
    { text: 'Complete Todo App on Frontend Mentor', id: '6', isChecked: false },
  ]);

  console.log(todoItem);

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

  function clearCompletedItems() {
    setTodoItem((prevTodoItem) => {
      const updatedTodo = prevTodoItem.filter((item) => !item.isChecked);
      return updatedTodo;
    });
  }

  // function showCompletedItems() {
  //   setTodoItem((prevTodoItem) => {
  //     const updatedTodo = prevTodoItem.filter((item) => item.isChecked);
  //     setTodoItem(updatedTodo)
  //   });
  // }

  // function showActiveItems() {
  //   setTodoItem((prevTodoItem) => {
  //     const updatedTodo = prevTodoItem.filter((item) => !item.isChecked);
  //     setTodoItem(updatedTodo)
  //   });
  // }

  // function showAllItems() {
  //   return todoItem
  // }

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
          onClearCompleted={clearCompletedItems}
        />
        <TodoOptionBar />
      </main>
    </React.Fragment>
  );
}

export default App;
