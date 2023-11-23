import React ,{useState} from 'react';
import ExpenseItem from "./expenseitems"
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
const Expenses=(props)=>{
  //const {setExpenses}=props
    let arr=props.expenses
    let set=props.setExpenses
    const onDelete=(id)=>{
      set(arr.filter((expense)=>expense.id!==id))
     }
   
    return(
        <Card className="expenses">
          <ExpensesFilter />
             {
        arr.map((expense,i)=>(
        <ExpenseItem key={expense.id}title={expense.title} amount={expense.amount} id={expense.id} date={expense.date} location={expense.location}
          onDelete={()=>onDelete(expense.id)}></ExpenseItem>
          
        ))
      }
        </Card>
    )
   
}
export default Expenses