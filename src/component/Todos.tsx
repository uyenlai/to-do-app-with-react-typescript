import React, { useContext } from "react";
import Item from "./Item";
import classes from "./Todos.module.css";
import { TodosContext } from "./store/todos-context";

const Todos: React.FC = () => {
  const todos = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todos.items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDeleteTodo={() => todos.deleteTodo(item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
