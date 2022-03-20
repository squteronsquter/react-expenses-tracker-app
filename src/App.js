import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 123456,
      title: "Carand'Ache Crayons",
      amount: 120.49,
      date: new Date(2022, 0, 10),
    },
    {
      id: 239908,
      title: "Arches Watercolor Paper",
      amount: 220.09,
      date: new Date(2022, 1, 29),
    },
    {
      id: 882677,
      title: "Set of Winsor&Newton Brushes",
      amount: 70.99,
      date: new Date(2022, 2, 19),
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className="header">My Expenses</h1>
        <Expenses items={expenses} />
      </div>
    </>
  );
};

export default App;
