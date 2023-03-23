import React, { useState, useEffect, useContext, useCallback } from "react";
import { ThemeContext } from "./themeContext";

import { TodoType } from "./interfaces";

/* Firebase */
import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove } from "firebase/database";

/* components */
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import TodoOptionBar from "./components/Todo/TodoOptionBar";
import ToggleThemeButton from "./components/UI/Buttons/ToggleThemeButton";
import ClearAllButton from "./components/UI/Buttons/ClearAllButton";

import initialTodos from "./todos";

import "./App.css";

const firebaseConfig = {
  apiKey: "AIzaSyBMxDJO1NpVUKOLzpE39A5hMgurQIyYlpw",
  authDomain: "react-todo-ca214.firebaseapp.com",
  databaseURL: "https://react-todo-ca214-default-rtdb.firebaseio.com/",
  projectId: "react-todo-ca214",
  storageBucket: "react-todo-ca214.appspot.com",
  messagingSenderId: "668137483676",
  appId: "1:668137483676:web:cad59596fec4ae1a552c59",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

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

  /* read & write functions */
  const clearAllTodos = async () => {
    setTodoItem([]);
    try {
      await remove(ref(database, "/"));
    } catch (error) {
      alert(error.message);
    }
  };

  const addTodoHandler = async (enteredText: string) => {
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
      const createdTodo = {
        id: generatedId,
        text: enteredText,
        isChecked: false,
      };

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

  const deleteTodoHandler = async (itemId: string) => {
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

  function checkTodo(itemId: string) {
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

  function clearCompletedTodo() {
    setTodoItem((prevTodoItem) => {
      const updatedTodo = prevTodoItem.filter((item) => !item.isChecked);
      return updatedTodo;
    });
  }

  /* display todos depending on option selected */
  function showAllTodos() {
    setVisibility("all");
  }

  function showActiveTodos() {
    setVisibility("active");
  }

  function showCompletedTodos() {
    setVisibility("completed");
  }

  /* Fetching todos from Firebase*/
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

      const loadedTodos: TodoType[] = [];

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
        onCheckTodo={(id: string) => checkTodo(id)}
        onDeleteTodo={deleteTodoHandler}
        onClearCompleted={clearCompletedTodo}
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
    <>
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
            onShowAllTodos={showAllTodos}
            onShowActiveTodos={showActiveTodos}
            onShowCompletedTodos={showCompletedTodos}
          />
          <ClearAllButton onClearAllTodos={clearAllTodos} />
        </div>
        <p className={`bottom-text `}>Drag and drop to reorder list</p>
      </main>
    </>
  );
}

export default App;
