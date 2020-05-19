import React, {useContext, useState, useEffect} from 'react'

import { BudgetContext } from  '../context/BudgetContext';

const InputForm = () => {

  const [range, setRange] = useState(15);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);

  const budgetContext = useContext(BudgetContext);

  const {name} = budgetContext;


    useEffect(() => {
    setExpense((income/12) * range * 0.01 );
  }, [income, range]);

    useEffect(() => {
      setSavings((income / 12) * (1 - (range * 0.01)))
    }, [income, range]);


    return (
      <div>
        {/* <p>Welcome to your monttnly budget, {name}</p> */}

        <form className="budget-input">
          <label htmlFor="range-slider">Your Percentage {range}%</label>
          <input
            type="range"
            min="0"
            max="30"
            value={range}
            className="slider"
            id="range-slide"
            onChange={event => setRange(event.target.value)}
          />
          <label htmlFor="income-amount">Enter Income</label>

          <input
            type="text"
            value={income}

            placeholder="Income"
            id="income-amount"
            onChange={event => setIncome(event.target.value)}
          />

          <h2>
            Monthly Expense: ${expense.toFixed(2)}
          </h2>
          <h2>
            Monthly Savings: ${savings.toFixed(2)}
          </h2>
        </form>
      </div>
    );
}

export default InputForm;

