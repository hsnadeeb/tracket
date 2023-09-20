import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const changeTitleHandler = () => {
    const newTitle = 'Changed';
    setTitle(newTitle);
    console.log(newTitle); // Log the updated title
  };

  const changeAmountHandler = () => {
    const newAmount = 100;
    setAmount(newAmount);
    console.log(newAmount); // Log the updated amount
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <ExpenseDetails amount={amount} location={props.location} title={title} />
      <button onClick={changeTitleHandler}>Change Title</button>
      <button onClick={changeAmountHandler}>Change Amount</button>
      <button>Delete Expense</button>
    </Card>
  );
};

export default ExpenseItem;
