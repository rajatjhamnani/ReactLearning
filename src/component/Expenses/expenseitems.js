import React ,{useState} from 'react';
import './Expenseitems.css'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'
const ExpenseItem=(props)=>{
   const [title ,  setTitle]=useState(props.title)
  // const {expenses}=props
    let ondelete=props.onDelete;
   const clickHandler=()=>{
    setTitle('updated')
    console.log(title)
   }
   
   //console.log(props.expenses)
 
   
    return(
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <ExpenseDetails title={title} amount={props.amount} location={props.location}/>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={ondelete}  >Delete Expense</button>
        </Card>
    )
}
export default ExpenseItem