import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = (props, todos) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <Todo
            setTodos={props.setTodos}
            todos ={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
