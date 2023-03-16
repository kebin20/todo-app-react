/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import "./TodoInput.css";
import CheckButton from "../UI/Buttons/CheckButton";
import { ThemeContext } from "../../themeContext";

type AddTodoType = {
  onAddTodo: (enteredValue: string) => void;
};

function TodoInput(props: AddTodoType) {
  const [enteredValue, setEnteredValue] = useState("");

  const { theme } = useContext(ThemeContext);

  //https://stackoverflow.com/questions/64649055/type-changeeventhtmlinputelement-is-not-assignable-to-type-changeeventhtml
  //https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript
  function todoInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredValue((event.target as HTMLButtonElement).value);
  }

  //https://stackoverflow.com/questions/68326000/cant-assign-submit-event-type
  function formSubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (enteredValue.trim().length > 0) {
      props.onAddTodo(enteredValue);
    }
    setEnteredValue("");
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${theme} form-container`}>
        <CheckButton type="submit">+</CheckButton>
        <input
          className={theme}
          value={enteredValue}
          id="no-border"
          placeholder="Create a new todo..."
          type="text"
          onChange={todoInputChangeHandler}
        />
      </div>
    </form>
  );
}

export default TodoInput;
