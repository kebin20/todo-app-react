import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./themeContext";

/* components */
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import TodoOptionBar from "./components/Todo/TodoOptionBar";
import ToggleThemeButton from "./components/UI/Buttons/ToggleThemeButton";

import "./App.css";

function App() {
  const [todoItem, setTodoItem] = useState([
    { text: "Complete online Javascript course", id: "1", isChecked: false },
    { text: "Jog around the park 3x", id: "2", isChecked: false },
    { text: "10 minutes meditation", id: "3", isChecked: false },
    { text: "Read for 1 hour", id: "4", isChecked: false },
    { text: "Pick up groceries", id: "5", isChecked: false },
    { text: "Complete Todo App on Frontend Mentor", id: "6", isChecked: false },
  ]);
  const [visibility, setVisibility] = useState("all");

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "white" : "hsl(235, 21%, 11%)";
  }, [theme]);

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
      return updatedTodo;
    });
  }

  function clearCompletedItems() {
    setTodoItem((prevTodoItem) => {
      const updatedTodo = prevTodoItem.filter((item) => !item.isChecked);
      return updatedTodo;
    });
  }

  function showAllItems() {
    setVisibility("all");
  }

  function showActiveItems() {
    setVisibility("active");
  }

  function showCompletedItems() {
    setVisibility("completed");
  }

  return (
    <React.Fragment>
      <header className={`header-${theme}-img`}>
        <div className="nav-wrapper">
          <nav className="nav">
            <h1 className="nav__title">Todo</h1>
            <ToggleThemeButton />
          </nav>
          <TodoInput onAddTodo={addTodoHandler} />
        </div>
      </header>
      <main>
        <div className="main-wrapper">
          <TodoList
            items={todoItem.filter(
              (item) =>
                visibility === "all" ||
                (visibility === "active" && !item.isChecked) ||
                (visibility === "completed" && item.isChecked)
            )}
            onCheckItem={(id) => checkItem(id)}
            onDeleteItem={deleteTodoHandler}
            onClearCompleted={clearCompletedItems}
          />
          <TodoOptionBar
            onShowAllItems={showAllItems}
            onShowActiveItems={showActiveItems}
            onShowCompletedItems={showCompletedItems}
          />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
