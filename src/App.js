import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
function App() {
  //Data source for my expenseitems

  const expenses = [
    {
      id: 123456,
      title: "Carand'Ache Crayons",
      amount: 120,
      date: "3/10/21",
    },
    {
      id: 239908,
      title: "Arches Watercolor Paper",
      amount: 220,
      date: "8/10/21",
    },
    {
      id: 882677,
      title: "Set of Winsor&Newton Brushes",
      amount: 70,
      date: "19/12/21",
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="header">My Expenses</h1>
        <ExpenseItem
          id={expenses[0].id}
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          id={expenses[1].id}
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          id={expenses[2].id}
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
      </div>
    </>
  );
}

export default App;
