import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <>
      <div className="expense-container">
        <span className="expense-date">{props.id}</span>
        <h2 className="expense-title">{props.title}</h2>
        <p className="expense-amount">{props.amount}</p>
        <span className="expense-date">{props.date}</span>
      </div>
    </>
  );
}

export default ExpenseItem;
