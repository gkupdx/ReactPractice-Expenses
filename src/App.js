// App (aka "root") component
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 18)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2024, 7, 18) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2022, 7, 18)
    },
    { id: "e4", title: "New Desk", amount: 450, date: new Date(2021, 7, 18) }
  ];

  const addExpenseHandler = (newExpense) => {
    console.log("Displayed in App.js: ", newExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
