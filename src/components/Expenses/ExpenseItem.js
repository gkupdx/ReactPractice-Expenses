// ExpenseItem component - responsible for outputting the individual "expense" data
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // let title = props.title;
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler} type="button">
        Change Title
      </button>
    </Card>
  );
}

export default ExpenseItem;
