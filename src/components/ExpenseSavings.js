import React, { useContext, useState, useEffect } from 'react'
import NumberFormat from "react-number-format";

import { BudgetContext } from '../context/BudgetContext';

const ExpenseSavings = () => {

  const [range, setRange] = useState(15);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);

  const budgetContext = useContext(BudgetContext);

  useEffect(() => {
    budgetContext.setExpense((income / 12) * range * 0.01);
  }, [income, range]);

  useEffect(() => {
    budgetContext.setSavings((income / 12) * (1 - (range * 0.01)))
  }, [income, range]);


  if (!budgetContext.loggedIn) {
    return null;
  }

  return (
    <div>



        <div className="expense-container">
          <h3> Monthly Expense:</h3>

          <NumberFormat
            className="currency-number"
            value={expense}
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

