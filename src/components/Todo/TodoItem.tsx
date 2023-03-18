import React from "react";
import "./TodoItem.css";
import CheckButton from "../UI/Buttons/CheckButton";
import DeleteButton from "../UI/Buttons/DeleteButton";
import { TodoItemType } from "src/interfaces";

function TodoItem(props: TodoItemType) {
  function deleteHandler() {
    props.onDeleteTodo(props.id);
  }

  return (
    <li className="todo-item" style={props.style}>
      <CheckButton
        onClick={() => {
          props.onCheckTodo(props.id);
        }}
        isChecked={props.isChecked}
      />
      {props.children}
      <DeleteButton onClick={deleteHandler}></DeleteButton>
    </li>
  );
}

export default TodoItem;
