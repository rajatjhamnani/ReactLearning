import React from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
const NewExpense=(props)=>{
    const savaExpenseDataHandler=(enteredExpenseData)=>{
        const ExpenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
          props.onAddExpense(ExpenseData)
    }
    return(
        <div className="new-expense">
         <ExpenseForm saveExpenseData={savaExpenseDataHandler}/>
        </div>
    )
}
export default NewExpense