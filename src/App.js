import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Insurance",
    amount: 40.89,
    date: new Date(2022, 0, 30),
  },
  {
    id: 2,
    title: "Food Shopping",
    amount: 150,
    date: new Date(2021, 5, 25),
  },
  { id: 3, title: "Gym", amount: 14.99, date: new Date(2022, 1, 26) },
  { id: 4, title: "Spotify", amount: 16.99, date: new Date(2019, 10, 25) },
  { id: 4, title: "Restaurant", amount: 75.48, date: new Date(2020, 9, 25) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => { return [expense, ...prevExpenses] })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
