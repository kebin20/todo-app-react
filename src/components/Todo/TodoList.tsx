/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./TodoList.css";
import { ThemeContext } from "../../themeContext";
import TodoItem from "./TodoItem";
import { TodoListType } from "src/interfaces";

function TodoList(props: TodoListType) {
  const { theme } = useContext(ThemeContext);

  const { onCheckTodo, onDeleteTodo, onClearCompleted, items } = props;

  return (
    <ul className={`${theme} todo-list`}>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          isChecked={item.isChecked}
          onCheckTodo={onCheckTodo}
          id={item.id}
          onDeleteTodo={onDeleteTodo}
          style={{ textDecoration: item.isChecked ? "line-through" : "none" }}
          items={[]}
        >
          {item.text}
        </TodoItem>
      ))}

      <div className="item-display">
        <p className="items-left">{props.items.length} items left</p>
        <button
          className={`clear-completed-btn ${theme}`}
          id="no-border"
          onClick={onClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </ul>
  );
}

export default TodoList;
