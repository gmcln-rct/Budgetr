import React, { useContext, useState, useEffect } from 'react'
import NumberFormat from "react-number-format";

import { BudgetContext } from '../context/BudgetContext';

const ExpenseSavings = () => {


  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);

  const budgetContext = useContext(BudgetContext);



  if (!budgetContext.loggedIn) {
    return null;
  }

  
  return (
    <div>

        <div className="expense-container">
          <h3> Monthly Expense:</h3>

          <NumberFormat
            className="currency-number"
            value={budgetContext.expense}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
            renderText={(value) => <div>{value}</div>}
          />
        </div>
        <div className="expense-container">
          <h3> Monthly Savings:</h3>

          <NumberFormat
            className="currency-number"
            value={savings}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
            renderText={(value) => <div>{value}</div>}
          />
        </div>

    </div>
  );
}

export default ExpenseSavings;

