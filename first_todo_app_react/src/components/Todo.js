import React from "react";

const Todo = (props, setTodos) => {
    // events deleting vs

const deleteHandler = () => {

    const todos = Object.values(props.todos);
    setTodos(todos.filter((el) => el.id !== props.todo.id));
};
  return (
    <div className="todo">
      <li className="todo-item"> {props.text} </li>
      <button className="complete-btn" >
        <i className="fas fa-check"> </i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"> </i>
      </button>
    </div>
  );
};

export default Todo;
