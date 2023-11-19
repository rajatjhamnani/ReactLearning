import React from 'react';
import './Expenseitems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
const ExpenseItem=(props)=>{
    let userid=props.id
    
   const clickHandler=()=>{
    console.log('Clicked!!!')
   }
 
   
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
            <button onClick={clickHandler}>Change Title</button>
            <button>Delete Expense</button>
        </Card>
    )
}
export default ExpenseItem