import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import Card from '../UI/Card';


const ExpenseItem=(props)=>{
    const clickHandler = ()=>{
        console.log('Clicked!!');
    }
    
    return (
        <Card className='expense-item'>
        <ExpenseDate date ={props.date} />
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} />
        <button onClick={clickHandler}>Change Title</button>
        <button >Delete Expense</button>
        </Card>
        );
}

export default ExpenseItem;