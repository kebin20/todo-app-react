import React, {useState} from "react"
import classes from "./TodoInput.module.css"

function TodoInput(props) {
const [enteredValue, setEnteredValue]= useState("Create a new todo...")

function todoInputChangeHandler(e) {
  setEnteredValue(e.target.value)
}

function formSubmitHandler(e) {
e.preventDefault()
props.onAddTodo(enteredValue)
}

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.form} >
        {/* <CheckButton></CheckButton> */}
        <input value={enteredValue} type="text" onChange={todoInputChangeHandler} />
      </div>
      {/* <Button type="submit">+</Button> */}
    </form>
  )
};

export default TodoInput