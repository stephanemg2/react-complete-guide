import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {


    if (props.items.length === 0) {
        // contenu conditionnel en fonction du contenu des depenses 
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }

    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
            ))}
        </ul>
    )
};

export default ExpensesList;