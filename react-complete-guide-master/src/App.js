import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {title:'Car Insurance', amount:'122', date:new Date(2022,2,17)},
    {title:'Toilet Paper', amount:'123', date:new Date(2022,7,18)},
    {title:'Netflix', amount:'124', date:new Date(2022,6,19)},
    {title:'Tv', amount:'125', date:new Date(2022,1,20)}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
     <Expenses items={expenses} />
    </div>
  );
}

export default App;
