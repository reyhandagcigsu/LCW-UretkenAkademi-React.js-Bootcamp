import "./TodoDate.css";

function TodoDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="todo-date">
      <div className="todo-date__month">{month}</div>
      <div className="todo-date__year"> {year}</div>
      <div className="todo-date__day"> {day}</div>
    </div>
  );
}
export default TodoDate;
