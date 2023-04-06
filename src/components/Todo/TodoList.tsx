import React, { useContext, useRef, useState } from "react";

import "./TodoList.css";
import { ThemeContext } from "../../themeContext";
import TodoItem from "./TodoItem";
import { TodoListType } from "src/interfaces";

function TodoList(props: TodoListType) {
  const { onCheckTodo, onDeleteTodo, onClearCompleted, items } = props;

  const { theme } = useContext(ThemeContext);
  const [todoList, setTodoList] = useState(items);

  // const dragItem = useRef<number | undefined | null>();
  // const dragOverItem = useRef<number | undefined | null>();

  // const dragStart = (
  //   event: React.DragEvent<HTMLLIElement>,
  //   position: number | undefined
  // ) => {
  //   dragItem.current = position;
  // };

  // const dragEnter = (
  //   event: React.DragEvent<HTMLLIElement>,
  //   position: number | undefined
  // ) => {
  //   dragOverItem.current = position;
  // };

  // const drop = (event: React.DragEvent<HTMLLIElement>) => {
  //   const copyTodoListItems = [...items];
  //   const dragItemContent = copyTodoListItems[dragItem.current!];
  //   copyTodoListItems.splice(dragItem.current!, 1);
  //   copyTodoListItems.splice(dragOverItem.current!, 0, dragItemContent);
  //   dragItem.current = null;
  //   dragOverItem.current = null;
  //   setTodoList(copyTodoListItems);
  // };

  return (
    <ul className={`${theme} todo-list`}>
      {todoList.map((item) => (
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
          // drop={drop}
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
