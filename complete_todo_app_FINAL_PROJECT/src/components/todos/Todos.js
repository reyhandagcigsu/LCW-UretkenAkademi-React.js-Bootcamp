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
        deleteTodo = {props.deleteTodo} />
      </Card>
    </div>
  );
}

export default Todos;
