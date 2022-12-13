import { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const filterSelectedHandler = (year) => {
    setSelectedYear(year);
  };

  const expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === parseInt(selectedYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectYear={filterSelectedHandler}
      />
      <ExpensesChart expenses={expenses}/>
      <ExpensesList items={expenses} />
    </Card>
  );
};

export default Expenses;
