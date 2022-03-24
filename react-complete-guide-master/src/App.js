import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  { title: 'Car Insurance', amount: '122', date: new Date(2022, 2, 17) },
  { title: 'Toilet Paper', amount: '123', date: new Date(2022, 7, 18) },
  { title: 'Netflix', amount: '124', date: new Date(2022, 6, 19) },
  { title: 'Tv', amount: '125', date: new Date(2022, 1, 20) }
];


const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense => {
    //on ajoute la nouvelle depense aux depenses preécedentes, a la variable d'etat react
    //pour ajouter un etat et maj l'etat precedent, on passe une fonction lambda qui aura le dernier etat connu via react

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
