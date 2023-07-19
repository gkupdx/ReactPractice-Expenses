// ExpenseDate component - responsible for outputting strictly the "date" data

import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" }); // "August"
  const day = props.date.toLocaleString("en-US", { day: "2-digit" }); // "18"
  const year = props.date.getFullYear(); // "2023"

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
