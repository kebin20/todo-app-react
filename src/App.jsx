import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./themeContext";

/* components */
import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";
import TodoOptionBar from "./components/Todo/TodoOptionBar";
import ToggleThemeButton from "./components/UI/Buttons/ToggleThemeButton";

import initialTodos from "./todos";

import "./App.css";

function App() {
  const [todoItem, setTodoItem] = useState(initialTodos);
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  /* Change theme function */
  const [visibility, setVisibility] = useState("all");

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.style.backgroundColor =
      theme === "light" ? "white" : "hsl(235, 21%, 11%)";
  }, [theme]);

  /* Editing functions */
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

  /* Fetching todo function */

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem("todoItem"));
    if (storedTodo) {
      setTodoItem(storedTodo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(todoItem));
  }, [todoItem]);

  /* FIREBASE METHOD */
  // const fetchTodoHandler = useCallback(async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-todo-ca214-default-rtdb.firebaseio.com/todo.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("An error has occurred");
  //     }

  //     const data = await response.json();

  //     setTodoItem(data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //   setIsLoading(false);
  // }, []);

  // useEffect(() => {
  //   fetchTodoHandler();
  // }, [fetchTodoHandler]);

  // /* Storing initial todoitems */
  // useEffect(() => {
  //   setInitialTodoData();
  // }, []);

  // /* Posting data to Firebase */
  // const setInitialTodoData = useCallback(async () => {
  //   const response = await fetch(
  //     "https://react-todo-ca214-default-rtdb.firebaseio.com/todo.json",
  //     {
  //       method: "POST",
  //       body: JSON.stringify(initialTodos),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   setTodoItem(data);
  // }, []);

  // /* Error Handling */

  // let content = <p>Found no todos.</p>;

  // if (todoItem.length > 0) {
  //   content = (
  //     <TodoList
  //       items={todoItem.filter(
  //         (item) =>
  //           visibility === "all" ||
  //           (visibility === "active" && !item.isChecked) ||
  //           (visibility === "completed" && item.isChecked)
  //       )}
  //       onCheckItem={(id) => checkItem(id)}
  //       onDeleteItem={deleteTodoHandler}
  //       onClearCompleted={clearCompletedItems}
  //     />
  //   );
  // }

  // console.log(todoItem);

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  // if (isLoading) {
  //   content = <p>Loading...</p>;
  // }

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
          {/* {content} */}
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
