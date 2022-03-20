import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <>
      <div className="expense-date-wrapper">
        <span className="expense-date-month">{month}</span>
        <span className="expense-date-year">{year}</span>
        <span className="expense-date-day">{day}</span>
      </div>
    </>
  );
}

export default ExpenseDate;
