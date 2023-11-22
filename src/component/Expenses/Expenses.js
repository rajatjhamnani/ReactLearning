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
        <ExpenseItem title={arr[i].title} amount={arr[i].amount} id={arr[i].id} date={arr[i].date} location={arr[i].location}
          onDelete={()=>onDelete(arr[i].id)}></ExpenseItem>
          
        ))
      }
        </Card>
    )
   
}
export default Expenses