import React, {useContext, useState, useEffect} from 'react'

const InputForm = () => {

  const [range, setRange] = useState(15);
  const [income, setIncome] = useState(0);

  //   useEffect(() => {
  //   setConvertedVal(amount * fromUnit / toUnit)
  // }, [amount, fromUnit, toUnit]);




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
          {/* <input type="submit" value="See Budget" /> */}
        </form>
      </div>
    );
}

export default InputForm;

