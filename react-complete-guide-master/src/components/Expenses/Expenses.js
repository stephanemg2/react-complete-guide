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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHander} selected={filteredYear} />
        {props.items.map((expense) => {
          return (<ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />)})}
      </Card>
    </div>
  );


}


export default Expenses;