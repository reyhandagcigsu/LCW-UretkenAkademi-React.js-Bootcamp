import React, {useState} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = (props) => {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);


  return (
    
    <div className="App">
      <header>
        <h3> Reyhan's Todo List</h3>
      </header>
      <Form 
      inputText ={inputText}
      todos={todos} setTodos={setTodos} setInputText ={setInputText}/>

      <TodoList setTodos ={setTodos} todos= {todos} />
    </div>
  );
};

export default App;


//https://www.youtube.com/watch?v=pCA4qpQDZD8  burdan izle devam et. 
