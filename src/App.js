import './App.css';
import ExpenseItem from './components/expense-item/expenseitem';

function App() {
  const expense = [
    {title: 'Toilet Paper' , date: new Date(2020,8,13) , price: 94.12} ,
    {title: 'New Tv' , date: new Date(2021,3,13) , price: 799.49} ,
    {title: 'Car Insurance' , date: new Date(2021,3,27), price: 294.67} ,
    {title: 'New Desk(Wooden)' , date:new Date(2021,5,12) , price: 450}
  ]
  return (
    <div className="App">
      <ExpenseItem title = {expense[0].title} date = {expense[0].date} price = {expense[0].price}> </ExpenseItem>
      <ExpenseItem title = {expense[1].title} date = {expense[1].date} price = {expense[1].price}> </ExpenseItem>
      <ExpenseItem title = {expense[2].title} date = {expense[2].date} price = {expense[2].price}> </ExpenseItem>
      <ExpenseItem title = {expense[3].title} date = {expense[3].date} price = {expense[3].price}> </ExpenseItem>
    </div>
  );
}

export default App;
