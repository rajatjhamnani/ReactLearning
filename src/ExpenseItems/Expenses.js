import React from 'react';
import ExpenseItem from "./expenseitems"
import './Expenses.css'
import Card from './Card'
function Expenses(props){
    let arr=props.expenses
    return(
        <Card className="expenses">
             {
        arr.map((expense,i)=>(
          <ExpenseItem title={arr[i].title} amount={arr[i].amount} date={arr[i].date} location={arr[i].location}></ExpenseItem>
        ))
      }
        </Card>
    )
   
}
export default Expenses