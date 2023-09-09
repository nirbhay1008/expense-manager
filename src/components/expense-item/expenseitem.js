import react from "react";
import "./expenseitem.css";

function ExpenseItem(props) {
  const Month = props.date.toLocaleString('en-US' , {month : 'long'});
  const Year = props.date.getFullYear();
  const Day = props.date.toLocaleString('en-US' , {day : '2-digit'})
  return (
    <div className="expense-item">
      <div>
        <div>{Month}</div> 
        <div>{Year}</div> 
        <div>{Day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item_price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
