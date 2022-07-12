import "./Todos.css";
import Card from "../UI/Card";
import TodosFilter from "./TodosFilter";
import { useState } from "react";
import TodosList from "./TodosList";


function Todos(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredTodos = props.items.filter((todo) => {
    console.log(todo)
    return todo.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="todos">
        <TodosFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <TodosList items={filteredTodos}
        toggleImportant={props.toggleImportant}
        deleteTodo = {props.deleteTodo}
        addImportantTodo = {props.addImportantTodo}
        removeImportantTodo = {props.removeImportantTodo} />
      </Card>
    </div>
  );
}

export default Todos;
