import React ,{useState} from "react"
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm"
const NewExpense=(props)=>{
const[isEditing , setIsEdiding]=useState(false)
    const savaExpenseDataHandler=(enteredExpenseData)=>{
        const ExpenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
          props.onAddExpense(ExpenseData)
          setIsEdiding(false)
    }
    const startEditingHandler =()=>{
    setIsEdiding(true)
    }
    const stopEditingHandler =()=>{
        setIsEdiding(false)
    }
    return(
        <div className="new-expense">
         {!isEditing &&   <button onClick={startEditingHandler}>Add New Expense</button>}
         {isEditing && <ExpenseForm saveExpenseData={savaExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}
export default NewExpense