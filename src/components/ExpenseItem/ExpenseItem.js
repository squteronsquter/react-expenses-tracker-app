import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <>
      <div className="expense-container">
        <span className="expense-date">{props.id}</span>
        <h2 className="expense-title">{props.title}</h2>
        <p className="expense-amount">USD {props.amount}</p>
        <div className="expense-date-wrapper">
          <span className="expense-date-month">{month}</span>
          <span className="expense-date-year">{year}</span>
          <span className="expense-date-day">{day}</span>
        </div>
      </div>
    </>
  );
}

export default ExpenseItem;
