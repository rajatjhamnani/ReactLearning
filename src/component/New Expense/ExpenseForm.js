import React ,{useState} from "react";
import'./ExpenseForm.css'
function ExpenseForm(props){
    const [enteredTitle , setEnteredTitle]=useState('')
    const [enteredAmount , setEnteredAmount]=useState('')
    const[enteredLocation , setEnteredLocation]=useState('')
    const [enteredDate ,setEnteredDate]=useState('')
    
// const [userInput ,setuserInput]=useState({
//     EnteredTitle:'',
//     EnteredAmount:'',
//     setEnteredDate:''

// })
    const titlechange =(event)=>{
        setEnteredTitle(event.target.value)
        // setuserInput({
        //     ...userInput,
        //     EnteredTitle:event.target.value
        // })
        // setuserInput((previousstate)=>{
        //     return{...previousstate , EnteredTitle:event.target.value}
        // })
    }
   
    const amountChange = (event) =>{
        setEnteredAmount(event.target.value)
    //     setuserInput((previousstate)=>{
    //         return{...previousstate , EnteredAmount:event.target.value}
    //     })
    }
    const locationChange=(event)=>{
        setEnteredLocation(event.target.value)
    }
   
    const dateChange =(event)=>{
        setEnteredDate(event.target.value)
    //    setuserInput((previousstate)=>{
    //     return{...previousstate , EnteredDate:event.target.value}
    // })
    }
    const submitHandler =(event)=>{
        event.preventDefault()
       let enteredData={
           title: enteredTitle,
           amount: enteredAmount,
           location:enteredLocation,
           date:new Date(enteredDate)

        }
       props.saveExpenseData(enteredData)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    
    return(
        <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange={titlechange}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={amountChange}/>
            </div>
            <div className="new-expense__control">
                <label>Location of Expense</label>
                <input type='text' value={enteredLocation} onChange={locationChange}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31'onChange={dateChange}/>
            </div>
        </div>
        <div className="new-expense__actions">
          <button type='submit' >Add Expense</button>
        </div>
        </form>
      
    )

}
export default ExpenseForm