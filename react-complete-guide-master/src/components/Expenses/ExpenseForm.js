import React, { useState } from "react";
import './ExpenseForm.css';

// comme le composant parent envoie une fonction en propriétés, on la recupere via props 
const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler = (event) => {
        //on retourne l'etat actualisé avec la nouvelle valeur
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    // on gere le submit du form au niveau global du form sur l'evenement onSubmit , on evite le reload
    const submitHandler = (event) => {
        event.preventDefault();
        //on recupere le data géré par les variables de state
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        // on rappele la fonction transmise par le composant parent 
        props.onSaveExpenseData(expenseData);
        // reset des valeurs 
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                {/* executée a chaque modification d'entree de donnée dans le champ input  */}
                {/* on implement le two way binding en affectant la valeur du champ d'input a la variable de state  */}
                <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>)
};

export default ExpenseForm;