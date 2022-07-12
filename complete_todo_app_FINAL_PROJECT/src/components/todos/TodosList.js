import "./TodosList.css";
import React from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="todos-list__fallback">Found No Todos Here.</h2>;
  }

  return (
    <ul className="todos-list">
      {props.items.map((todo) => (
        <TodoItem 
        key = {todo.id}
        toggleImportant={props.toggleImportant}
        todo = {todo}
          deleteTodo = {props.deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodosList;