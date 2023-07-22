// ExpensesList component
// NOTE: COMPONENT IS AN EXAMPLE OF ANOTHER WAY OF CONDITIONAL RENDERING
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // first check to see if there are any expenses for the filtered year:

  // if NO, render this <h3>
  if (props.filteredExpenses.length === 0) {
    return (
      <h3 className="expenses-list__fallback">
        Found no expenses for the given year.
      </h3>
    );
  }

  // if YES, render this list instead
  return (
    <ul className="expenses-list">
      {props.filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
