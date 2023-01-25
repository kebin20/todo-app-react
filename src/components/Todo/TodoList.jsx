/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import "./TodoList.css";
import { ThemeContext } from "../../themeContext";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { theme } = useContext(ThemeContext);

  return (
    <ul className={`${theme} todo-list`}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          isChecked={item.isChecked}
          onCheckItem={props.onCheckItem}
          id={item.id}
          onDelete={props.onDeleteItem}
          style={{ textDecoration: item.isChecked ? "line-through" : "none" }}
        >
          {item.text}
        </TodoItem>
      ))}
      <div className="item-display">
        <p className="items-left">{props.items.length} items left</p>
        <button
          className={`${theme} clear-completed-btn`}
          onClick={props.onClearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </ul>
  );
}

export default TodoList;
