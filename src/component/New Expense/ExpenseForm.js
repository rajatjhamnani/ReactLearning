import React from "react";
import'./ExpenseForm.css'
function ExpenseForm(){
    const titlechange =(event)=>{
        console.log(event.target.value)
    }
    const amountChange = (event) =>{
        console.log(event.target.value)
    }
    const dateChange =(event)=>{
        console.log(event.target.value)
    }
    return(
        <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titlechange}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' onChange={amountChange}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31'onChange={dateChange}/>
            </div>
        </div>
        <div className="new-expense__actions">
          <button type='submit'>Add Expense</button>
        </div>
        </form>
      
    )

}
export default ExpenseForm