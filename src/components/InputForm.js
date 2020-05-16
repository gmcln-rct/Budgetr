import React, {useContext, useState, useEffect} from 'react'

// import { BudgetContext, BudgetContextProvider } from  '../context/BudgetContext';

const InputForm = () => {

  const [range, setRange] = useState(15);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);


    useEffect(() => {
    setExpense(income * range * 0.01 * ( 1/12) );
    setSavings(income - expense)
  }, [income, range]);

  // const [range, setRange] = useContext(BudgetContextProvider);
  // const [income, setIncome ] = useContext(BudgetContextProvider);

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
            type="number"
            value={income}

            placeholder="Income"
            id="income-amount"
            onChange={event => setIncome(event.target.value)}
          />

          <h2>
            {expense.toFixed(2)}
          </h2>
          <h2>
            {savings.toFixed(2)}
          </h2>
          {/* <input type="submit" value="See Budget" /> */}
        </form>
      </div>
    );
}

export default InputForm;

