import './ExpenseItem.css';
function ExpenseItem(){
    const desc='Food';
    const price= 100;
    const date = new Date(2023,18,9)
    const LocationOfExpenditure='India'
    return ( 
    <div className="expense-item">
        <div>{date.toISOString()}</div>
        <div className='expense-item__description'>
          <h2>{desc}</h2>
          <h2>{LocationOfExpenditure}</h2>
          <div className='expense-item__price'>Rs {price}</div>
    </div> 
    </div>
    );
}

export default ExpenseItem;