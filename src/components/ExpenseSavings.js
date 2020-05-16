import React, {useState, useEffect} from 'react';


const ExpenseSavings = () => {

  const [expense, setExpense] = useState(0);
  const [savings, setSavings] = useState(0);

  // useEffect(() => {
  //   setConvertedVal(amount * fromUnit / toUnit)
  // }, [amount, fromUnit, toUnit]);



    return (
      <div className="expense-savings">
        <h2>Your Expense</h2>

        <h2>Your Savings</h2>
      </div>
    );
}

export default ExpenseSavings
