import React, {useContext, useState, useEffect} from 'react'
import NumberFormat from "react-number-format";

import { BudgetContext } from  '../context/BudgetContext';

const InputForm = () => {

  const [range, setRange] = useState(15);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);

  const budgetContext = useContext(BudgetContext);

    useEffect(() => {
    setExpense((income/12) * range * 0.01 );
  }, [income, range]);

    useEffect(() => {
      setSavings((income / 12) * (1 - (range * 0.01)))
    }, [income, range]);


    if (!budgetContext.loggedIn) {
      return null;
    }

    return (
      <div>

        <hr></hr>
        <form className="budget-input">
          <label htmlFor="range-slider">Select Election % </label>
          <input
            type="range"
            min="0"
            max="30"
            value={range}
            className="slider"
            id="range-slide"
            onChange={(event) => setRange(event.target.value)}
          />
          <p>{range}%</p>

          <label htmlFor="income-amount">Enter Income</label>



          <input
            type="number"
                min="0" 
            step="1"
            value={income}
            placeholder="Income"
            id="income-amount"
            onChange={(event) => setIncome(event.target.value)}
          />

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
        </form>
      </div>
    );
}

export default InputForm;

