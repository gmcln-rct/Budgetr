import React, {useContext, useState, useEffect} from 'react'

// import { BudgetContext, BudgetContextProvider } from  '../context/BudgetContext';

const InputForm = () => {

  const [range, setRange] = useState(15);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);


    useEffect(() => {
    setExpense((income/12) * range * 0.01 );
  }, [income, range]);

  useEffect(() => {
    setSavings((income / 12) * (1 - (range * 0.01)))
  }, [income, range]);


    return (
      <div>
        <form className="budget-input">
          <label for="range-slider">Your Percentage {range}%</label>
          <input
            type="range"
            min="0"
            max="30"
            value={range}
            class="slider"
            id="range-slide"
            onChange={event => setRange(event.target.value)}
          />
          <label for="income-amount">Enter Income</label>

          <input
            type="text"
            value={income}
            pattern="\\$?(([1-9](\\d*|\\d{0,2}(,\\d{3})*))|0)(\\.\\d{1,2})?$" 
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
          {/* <input type="submit" value="See Budget" /> */}
        </form>
      </div>
    );
}

export default InputForm;

