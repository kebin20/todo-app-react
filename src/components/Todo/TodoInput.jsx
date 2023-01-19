import React, {useState} from "react"

function TodoInput(props) {
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.form} >

        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  )
};

export default TodoInput