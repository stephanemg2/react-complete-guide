import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesLists';
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const yearChangeHander = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // on filtre les depenses selon le filtre choisi 
const filteredExpenses = props.items.filter((expense) => { return expense.date.getFullYear().toString() === filteredYear });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onYearChange={yearChangeHander} selected={filteredYear} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );


}


export default Expenses;