import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Header from "./MainHeader/Header";
import NewTodo from "./NewTodo/NewTodo";
import Todos from "./todos/Todos";
import Buttons from "./UI/Buttons";
import axios from "axios";


const Account = (props) => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [forceRenderCount, setforceRenderCount] = useState(0);

  useEffect(() => {
    console.log(props.onlyImportants)
    const token = localStorage.getItem('user_token')
    axios
      .get(`http://localhost:3001/api/todo?token=${token}`)
      .then((res) => setItems(filterTodos(res.data.items)));
  }, []);


  const filterTodos = (items) =>{
    console.log(items)
    if(props.onlyImportants){
      return items.filter((i) => i.isImportant === 1)
    }else{
      return items
    }
  }

  const addTodoHandler = (todo) => {
    const token = localStorage.getItem('user_token')
    const addTodoPostBody = {
      todo:todo,
      token:token    
    }
    todo.isImportant=false
    axios
      .post("http://localhost:3001/api/todo", addTodoPostBody)
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
    const token = localStorage.getItem('user_token');
    axios
      .delete(`http://localhost:3001/api/todo/${id}?token=${token}` )
      .then((res) => console.log(res));

    setItems(items.filter((u) => u.id !== id));
  };

  const updateTodoImportantState = (id, newImportantState) => {
    let updateBody={
      "id":id,
      "newImportantState":newImportantState
    }
    axios
    .put(`http://localhost:3001/api/todo`, updateBody)
    .then((res) => console.log(res));
  }

  const toggleImportant = (todo) =>{
    const newImportantState = !todo.isImportant
    for(let i=0;i<items.length;i++){
      if(items[i].id===todo.id){
        items[i].isImportant = newImportantState
        updateTodoImportantState(todo.id,newImportantState)
        break
      }
    }

    setforceRenderCount(forceRenderCount+1)
    //setItems(items)
  }



  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <Header onClick={handleLogout} /> 
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos
        toggleImportant={toggleImportant}
        items={convertStringDatesToDateObjects(items)}
        deleteTodo={deleteTodoHandler}
      />
     
    </div>
  );
};

export default Account;
