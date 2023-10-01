import React, { useState } from 'react';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount]= useState(props.amount);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandlerTitle = () => {
    setTitle('Updated!');
    console.log(title);
  };

  const clickHandlerAmount = () => {
    setAmount(100);
    console.log(amount);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={amount} location />
      <button onClick={clickHandlerTitle}>Change Title</button>
      <button onClick={clickHandlerAmount}>Change Expense</button>
      <button >Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;