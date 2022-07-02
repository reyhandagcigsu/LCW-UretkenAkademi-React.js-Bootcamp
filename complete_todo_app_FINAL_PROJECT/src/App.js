import React, { useState, useEffect } from "react";
import "./App.css";
import Todos from "./components/todos/Todos";
import NewTodo from "./components/NewTodo/NewTodo";
import axios from "axios";


const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/todo")
      .then((res) => setItems(res.data.items));
  }, []);

  const addTodoHandler = (todo) => {
    axios
      .post("http://localhost:3001/api/todo", todo)
      .then((res) => console.log(res));
    setItems((prevTodos) => {
      return [todo, ...prevTodos];
    });
  };

  const convertStringDatesToDateObjects = (items) => {
    items.map((item, index) => {
      item["date"] = new Date(item["date"]);
    });
    return items;
  };

  const deleteTodoHandler = (id) => {
    axios
      .delete("http://localhost:3001/api/todo/"+id)
      .then((res) => console.log(res));

    setItems(items.filter((u) => u.id !== id));
 }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={convertStringDatesToDateObjects(items)}
      deleteTodo = {deleteTodoHandler} />
    </div>
  );
};

export default App;
