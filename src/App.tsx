import React, { useState, useEffect, useContext, useCallback } from "react";
import { ThemeContext } from "./themeContext";

/* components */
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import TodoOptionBar from "./components/Todo/TodoOptionBar";
import ToggleThemeButton from "./components/UI/Buttons/ToggleThemeButton";
import ClearAllButton from "./components/UI/Buttons/ClearAllButton";

import initialTodos from "./todos";

import "./App.css";

function App() {
  const [todoItem, setTodoItem] = useState(initialTodos);
  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  /* Change theme function */
  const [visibility, setVisibility] = useState("all");

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "white" : "hsl(235, 21%, 11%)";
  }, [theme]);

  /* Editing functions */

  const clearAllTodos = async () => {
    setTodoItem([]);
  };

  const addTodoHandler = async (enteredText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-todo-ca214-default-rtdb.firebaseio.com/todo.json",
        {
          method: "POST",
          body: JSON.stringify({ text: enteredText }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const generatedId = data.name;
      const createdTodo = { id: generatedId, text: enteredText };

      setTodoItem((prevTodoItem) => {
        const updatedTodo = [...prevTodoItem];
        updatedTodo.unshift(createdTodo);
        return updatedTodo;
      });
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  const deleteTodoHandler = async (itemId) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://react-todo-ca214-default-rtdb.firebaseio.com/todo/${itemId}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete item");
      }

      setTodoItem((prevTodoItem) => {
        const updatedTodo = prevTodoItem.filter((item) => item.id !== itemId);
        return updatedTodo;
      });
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

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

  /* FIREBASE METHOD 1*/
  const fetchTodoHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-todo-ca214-default-rtdb.firebaseio.com/todo.json"
      );
      if (!response.ok) {
        throw new Error("An error has occurred");
      }

      const data = await response.json();

      const loadedTodos = [];

      for (const todoKey in data) {
        loadedTodos.push({
          id: todoKey,
          text: data[todoKey].text,
          isChecked: data[todoKey].isChecked,
        });
      }

      setTodoItem(loadedTodos);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (todoItem.length === 0) {
      fetchTodoHandler();
    }
  }, [todoItem.length]);

  // /* Error Handling */

  let content = (
    <p className={`content-placeholder ${theme}`}>Found no todos.</p>
  );

  if (todoItem.length > 0) {
    content = (
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
    );
  }

  if (error) {
    content = <p className={`content-placeholder ${theme}`}>{error}</p>;
  }

  if (isLoading) {
    content = <p className={`content-placeholder ${theme}`}>Loading...</p>;
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
          {content}
          <TodoOptionBar
            onShowAllItems={showAllItems}
            onShowActiveItems={showActiveItems}
            onShowCompletedItems={showCompletedItems}
          />
          <ClearAllButton onClearAllTodos={clearAllTodos} />
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
