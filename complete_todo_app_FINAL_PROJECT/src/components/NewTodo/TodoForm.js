import React, { useState } from "react";
import "./TodoForm.css";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const TodoForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(" ");
  const [enteredDate, setEnteredDate] = useState(null);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const todoData = {
      title: enteredTitle,
      date: new Date(enteredDate),
    };

    props.onSaveTodoData(todoData);  
    setEnteredTitle(" ");   // clearing data after gathering the inputs from the users
    setEnteredDate(" ");
  };

  return (
    <form onSubmit={submitHandler}>
    <div className="new-todo__controls">
      <div className="new-todo__control">
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="new-todo__control">
        <label>Date</label>
        <DatePicker
        type="date"
        placeholderText="Start"
        isClearable={true}
        selected={enteredDate}
        onChange={date => setEnteredDate(date)}
        selectsStart
        dateFormat="dd-MM-yyyy"
t        />
      </div>
    </div>
    <div className="new-todo__actions">
      <button type="button" onClick={props.onCancel} > Cancel </button>
      <button type="submit">Add Todo</button>
    </div>
  </form>
  );
};


export default TodoForm;
