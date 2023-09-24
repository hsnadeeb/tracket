// import react from 'react';
const ExpenseForm = (props)=>{

    const handleTitleChange = (event) => {
       
        console.log(event.target.value);
      };
    
      const handleAmountChange = (event) => {
    
        console.log(event.target.value);
      };
    
      const handleDateChange = (event) => {
    
        console.log(event.target.value);
      };


    return(
       <div>
        <form>
            <div>
                <label>Expense Title</label>
                <input type='text' onChange={handleTitleChange}></input>
            </div>
            <div>
                <label>Expense Amount</label>
                <input type='number' onChange={handleAmountChange}></input>
            </div>
            <div>
                <label>Date</label>
                <input type='date' onChange={handleDateChange}></input>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
       </div>

    )
}

export default ExpenseForm;