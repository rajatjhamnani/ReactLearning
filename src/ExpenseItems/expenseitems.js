import './Expenseitems.css'
function ExpenseItem(props){
    const expenseDate = new Date(2021 , 2 , 28)
    const expensetitle='Car Insurance'
    const expenseAmount= 294.64
    const locationOfExpenditure="mumbai"
    return(
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <h1>{props.location}</h1>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}
export default ExpenseItem