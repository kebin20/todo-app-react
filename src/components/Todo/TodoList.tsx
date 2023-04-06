import React, { useContext, useState } from "react";

import "./TodoList.css";
import { ThemeContext } from "../../themeContext";
import TodoItem from "./TodoItem";
import { TodoListType } from "src/interfaces";

function TodoList(props: TodoListType) {
  const { onCheckTodo, onDeleteTodo, onClearCompleted, items } = props;

  const { theme } = useContext(ThemeContext);
  // const [draggedItemIndex, setDraggedItemIndex] = useState<number | null>(null);


  // const dragStart = (
  //   event: React.DragEvent<HTMLLIElement>,
  //   position: number
  // ) => {
  //   setDraggedItemIndex(position);
  // };

  // const dragEnter = (
  //   event: React.DragEvent<HTMLLIElement>,
  //   position: number
  // ) => {
  //   if (draggedItemIndex !== null) {
  //     const newItems = [...items];
  //     const draggedItem = newItems[draggedItemIndex];
  //     newItems.splice(draggedItemIndex, 1);
  //     newItems.splice(position, 0, draggedItem);
  //     setDraggedItemIndex(position);
  //     props.onDrag(newItems);
  //   }
  // };

  // const dragEnd = () => {
  //   setDraggedItemIndex(null);
  // };

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
          // index={index}
          // dragStart={(event) => dragStart(event, index)}
          // dragEnter={(event) => dragEnter(event, index)}
          // dragEnd={dragEnd}
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
