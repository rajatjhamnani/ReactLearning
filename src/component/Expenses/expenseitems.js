import React ,{useState} from 'react';
import './Expenseitems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
const ExpenseItem=(props)=>{
   const [title ,  setTitle]=useState(props.title)
  // const {expenses}=props
  const clickHandler=()=>{
    setTitle('updated')
    console.log(title)
   }
   const [amount , setAmount]=useState(props.amount)
   const changeAmount=()=>{
    setAmount('100')
   }
   let ondelete=props.onDelete;
   
   //console.log(props.expenses)
 
   
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} amount={amount} location={props.location}/>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={changeAmount}>Change amount</button>
            <button onClick={ondelete}  >Delete Expense</button>
        </Card>
    )
}
export default ExpenseItem