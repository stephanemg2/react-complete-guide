import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false);

    //pour gerer l'apparition du bouton global new Expense
    const startEditingHandler = () => {
        setEditing(true);
    };

    const stopEditingHandler = () => {
        setEditing(false);
    };

    const saveExpenseDataHandler = (enteredExpenseData) => {
        // on recupere les valeurs saisies du formulaire en ajoutant un faux identifiant
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setEditing(false);
    };

    return (<div className="new-expense">
        {!isEditing && (<button className="new-expense__toggle" onClick={startEditingHandler}>Add New Expense</button>)}
        {/* on envoie une fonction au composant enfant afin qu'il puisse maj le composant parent  */}
        {isEditing && (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />)}
    </div>);

}

export default NewExpense;