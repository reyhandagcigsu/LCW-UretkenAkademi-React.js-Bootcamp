import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import "./TodoItem.css";
import TodoDate from "./TodoDate";
import Card from "../UI/Card";

const TodoItem = (props) => {
  return (
    <li> 
    <Card className="todo-item">
      <TodoDate date={props.date} />
      <div className="todo-item__description">
        <h2> {props.title} </h2>
        <button
        onClick={()=> props.deleteTodo(props.id)}
        > Delete</button>
      </div>
    </Card>
    </li>
  );
};

export default TodoItem;