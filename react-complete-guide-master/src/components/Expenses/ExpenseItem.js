import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import React, { useState } from 'react';

const ExpenseItem = (props) => {

  // on recupere un couple variable setter pour gerer l'etat de la variable title
  const [title, setTitle] = useState(props.title);
 
  const clickHandler = () => {
    setTitle('Updated !');
  }

  return (
    <Card className='expense-item'>
      {/* contenu envoyé dans props.children du container Card.js */}
     <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
