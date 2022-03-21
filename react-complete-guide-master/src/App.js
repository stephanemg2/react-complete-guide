import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense";

const App = () => {
  const expenses = [
    { title: 'Car Insurance', amount: '122', date: new Date(2022, 2, 17) },
    { title: 'Toilet Paper', amount: '123', date: new Date(2022, 7, 18) },
    { title: 'Netflix', amount: '124', date: new Date(2022, 6, 19) },
    { title: 'Tv', amount: '125', date: new Date(2022, 1, 20) }
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
