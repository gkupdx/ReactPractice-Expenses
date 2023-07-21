// ExpenseForm component (form component)
import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [newTitle, setNewTitle] = useState("");
  // const [newAmount, setNewAmount] = useState('');
  // const [newDate, setNewDate] = useState("");
  const [newInput, setNewInput] = useState({
    newTitle: "",
    newAmount: "",
    newDate: ""
  });

  const titleChangeHandler = (event) => {
    setNewInput((prevState) => {
      return {
        ...prevState,
        newTitle: event.target.value
      };
    });
  };
  const amountChangeHandler = (event) => {
    setNewInput((prevState) => {
      return {
        ...prevState,
        newAmount: event.target.value
      };
    });
  };
  const dateChangeHandler = (event) => {
    setNewInput((prevState) => {
      return {
        ...prevState,
        newDate: event.target.value
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newInput.newTitle,
      amount: newInput.newAmount,
      date: newInput.newDate
    };
    // on submit, use the callback function prop to send 'expenseData' to parent
    props.onSaveExpenseData(expenseData);

    // after submission, we RESET the form
    setNewInput({
      newTitle: "",
      newAmount: "",
      newDate: ""
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={newInput.newTitle}
            onChange={titleChangeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          {/* step = specifying the interval */}
          <input
            value={newInput.newAmount}
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={newInput.newDate}
            onChange={dateChangeHandler}
            type="date"
            min="2023-07-20"
            max="2024-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
