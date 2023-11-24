import React ,{useState} from 'react';
import ExpenseItem from "./expenseitems"
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseChart from './ExpensesChart';
const Expenses=(props)=>{
  //const {setExpenses}=props
    let arr=props.expenses
    let set=props.setExpenses
    const onDelete=(id)=>{
      set(arr.filter((expense)=>expense.id!==id))
     }
   const [filteredYear , setFilteredYear]=useState('2020')
   const filterChangeHandler =(selectedYear)=>{
    setFilteredYear(selectedYear)
   }
   const filteredExpenses= arr.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear
   })
   let expensesContent=<p>There ia no content</p>

   if(filteredExpenses.length>=1){
    expensesContent= filteredExpenses.map((expense,i)=>(
      <ExpenseItem key={expense.id}title={expense.title} amount={expense.amount} id={expense.id} date={expense.date} location={expense.location}
        onDelete={()=>onDelete(expense.id)} ></ExpenseItem>
        
      ))
   }

    return(
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
          <ExpenseChart expenses={filteredExpenses}/>
             {expensesContent}
             {filteredExpenses.length===1? <p>only one expense left plaese add more expenses </p> :""}
        </Card>
    )
   
}
export default Expenses