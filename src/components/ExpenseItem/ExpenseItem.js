import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function ExpenseItem(props) {
  return (
    <>
      <div className="expense-container">
        <ExpenseDate date={props.date} />
        <h2 className="expense-title">{props.title}</h2>
        <p className="expense-amount">USD {props.amount}</p>
      </div>
    </>
  );
}

export default ExpenseItem;
