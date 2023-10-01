// import ExpenseItem from "./components/Expenses/ExpenseItem";
// import NewExpense from "./components/NewExpense/NewExpense";
// const App=()=> {
//   const expenses = [
//     {
//       id: "e1",
//       title: "Toilet Paper",
//       amount: 94.12,
//       date: new Date(2020, 7, 14),
//       location: "India",
//     },
//     {
//       id: "e2",
//       title: "New TV",
//       amount: 799.49,
//       date: new Date(2021, 2, 12),
//       location: "India",
//     },
//     {
//       id: "e3",
//       title: "Car Insurance",
//       amount: 294.67,
//       date: new Date(2021, 2, 28),
//       location: "India",
//     },
//     {
//       id: "e4",
//       title: "New Desk (Wooden)",
//       amount: 450,
//       date: new Date(2021, 5, 12),
//       location: "India",
//     },
//   ];

//   const addExpenseHandler = (expense) =>{
//     console.log('In app js');
//     console.log(expense);
//   };

//   return (
//     <div>
//       <NewExpense onAddExpense={addExpenseHandler} />
//       {expenses.map ((expense)=>(
//       <ExpenseItem
//         id={expense.id}
//         title= {expense.title}
//         amount= {expense.amount}
//         date= {expense.date}
//         location= {expense.location}
//         />
//       ))}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "India",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "India",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "India",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "India",
    },
  ]);

  // Handler to add a new expense
  const addExpenseHandler = (expense) => {
    // Add the new expense to the existing expenses
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          location={expense.location}
        />
      ))}
    </div>
  );
}

export default App;
