import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "./store/todos-context";

const NewTodo: React.FC = () => {
  const todoContext = useContext(TodosContext);

  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredValue = ref.current!.value;

    if (enteredValue.trim().length === 0) {
      return;
    }
    todoContext.addTodo(enteredValue);

    ref.current!.value = "";
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label htmlFor="text">To-do text</label>
      <input type="text" id="text" ref={ref} />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
