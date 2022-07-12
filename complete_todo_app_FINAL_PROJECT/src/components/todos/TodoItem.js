import { getDefaultNormalizer } from "@testing-library/react";
import React from "react";
import "./TodoItem.css";
import TodoDate from "./TodoDate";
import Card from "../UI/Card";
import {AiOutlineStar,AiFillStar } from "react-icons/ai";
import TodoForm from "../NewTodo/TodoForm";
import { useState , useEffect} from 'react';




const TodoItem = (props) => {

  

  const renderStarItem = (todo) =>{
    if (todo.isImportant==false){
      return (<AiOutlineStar color="#40005d" size="28" />)
    }else{
      return (<AiFillStar color="#40005d" size="28" />)
    }
  }

  return (
    <li>
      <Card className="todo-item">
        <TodoDate date={props.todo.date} />
        <div className="todo-item__description">
          <h2> {props.todo.title} </h2>
          <button onClick={() => props.deleteTodo(props.todo.id)}> Delete</button>
          <button className="starButton" onClick={() => props.toggleImportant(props.todo)}>
          {
            renderStarItem(props.todo)
          }
          </button>

        </div>
      </Card>
    </li>
  );
};

export default TodoItem;
