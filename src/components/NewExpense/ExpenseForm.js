import React, { useState } from 'react';
import './ExpenseForm.css'; 

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(false); // State to control form visibility

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setTitle(newTitle);
  };

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
  };

  const handleDateChange = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
  };

  const handleSubmitChange = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setAmount('');
    setDate('');
    setTitle('');
    setIsEditing(false); // Hide the form after submission
  };

  // Toggle form visibility when clicking "Add Expense" button
  const handleAddExpenseClick = () => {
    setIsEditing(true);
  };


  return (
    <div>
      {!isEditing && (
        <button className='new-expense__actions' onClick={handleAddExpenseClick}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <form onSubmit={handleSubmitChange}>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Expense Title</label>
              <input type="text" value={title} onChange={handleTitleChange} />
            </div>
            <div className='new-expense__control'>
              <label>Expense Amount</label>
              <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <div className='new-expense__control'>
              <label>Date</label>
              <input type="date" value={date} onChange={handleDateChange} />
            </div>
            <div className='new-expense__actions'>
              <button type="submit">Add Expense</button>
              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ExpenseForm;