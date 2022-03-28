import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHander = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // on filtre les depenses selon le filtre choisi 
  const filteredExpenses = props.items.filter((expense) => { return expense.date.getFullYear().toString() === filteredYear });

  // contenu conditionnel en fonction du contenu des depenses 
  let expensesContant = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expensesContant = filteredExpenses.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} date={expense.date} amount={expense.amount} />)
    )
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHander} selected={filteredYear} />
        {expensesContant}
      </Card>
    </div>
  );


}


export default Expenses;