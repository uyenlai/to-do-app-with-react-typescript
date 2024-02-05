import React from "react";
import Todo from "../models/todos";
import classes from "./Item.module.css";

const Item: React.FC<{ item: Todo; onDeleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <div className={classes.item}>
      <li>{props.item.text}</li>
      <button onClick={() => props.onDeleteTodo(props.item.id)}>Delete</button>
    </div>
  );
};

export default Item;
