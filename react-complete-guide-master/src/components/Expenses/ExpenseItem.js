import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'

const ExpenseItem = (props) => {

  let title = props.title;
 
  const clickHandler = () => {
    title = 'Updated !';
  }

  return (
    <Card className='expense-item'>
      {/* contenu envoyé dans props.children du container Card.js */}
     <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
