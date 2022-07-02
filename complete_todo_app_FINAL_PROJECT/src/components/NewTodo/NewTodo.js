import "./NewTodo.css";
import TodoForm from "./TodoForm";
import React, { useState } from "react";

const NewTodo = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveTodoDataHandler = (enteredTodoData) => {
    const todoData = {
      ...enteredTodoData
    };
    props.onAddTodo(todoData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-todo">
      {!isEditing && (
        <button onClick={startEditingHandler}> Add New Todo!</button>
      )}
      {isEditing && (
        <TodoForm
          onSaveTodoData={saveTodoDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewTodo;
