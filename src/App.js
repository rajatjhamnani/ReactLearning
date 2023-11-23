import React, { useState } from 'react';
import logo from './logo.svg';
import Expenses from './component/Expenses/Expenses';
import ExpenseItem from './component/Expenses/expenseitems';
import './App.css';
import ExpenseDetails from './component/Expenses/ExpenseDetails';
import NewExpense from './component/New Expense/NewExpense';

const Dummy_Expenses=[
  {
    
   id:'e1',
   title:'toilet paper',
   amount:29,
   date:new Date(2021 , 2 , 28),
   location:'Home'
  },
  {
  id:'e2',
  title:'New Tv',
  amount:290,
  date:new Date(2022 , 4 , 28),
  location:'Home'
},
  
  {
  id:'e3',
  title:'Car Insurance',
  amount:150,
  date:new Date(2021 , 11 , 28),
  location:'Car'
},
  { 
  id:'e4',
  title:'home decor',
  amount:500,
  date:new Date(2022 , 5 , 26),
  location:'home'
}
]


const App=()=> {
  
  const [expenses,setExpenses]=useState(Dummy_Expenses)
  const addExpenseHandler=(expense)=>{
    
   // expenses.push(expense)
    setExpenses((prevexpense)=>{
      return [expense, ...prevexpense]
    })
  }

 
// return React.createElement(
//   'div',
//   {className:App},
//   React.createElement(Expenses ,{expenses:expenses})
// )
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses} setExpenses={setExpenses}  />
      
      
    
     
     {/* <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} location={expenses[0].location}></ExpenseItem>
     <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} location={expenses[1].location}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} location={expenses[2].location}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} location={expenses[0].location}></ExpenseItem>
       */}
    </div>
  );
}

export default App;
