import React from 'react';
import './Expenseitems.css'
function ExpenseDetails(props){
return(
    <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h1>{props.location}</h1>
                <div className="expense-item__price">${props.amount}</div>
            </div>
)
}
export default ExpenseDetails