import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        // on recupere les valeurs saisies du formulaire en ajoutant un faux identifiant
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (<div className="new-expense">
        {/* on envoie une fonction au composant enfant afin qu'il puisse maj le composant parent  */}
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>);

}

export default NewExpense;