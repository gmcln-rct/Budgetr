import React, {useContext, useState, useEffect} from 'react'

const InputForm = () => {

  const [range, setRange] = useState(15);
  const [income, setIncome] = useState(0);


    return (
      <div>
        <form className="budget-input">
          <label for="range-slider">Percentage</label>
          <input
            type="range"
            min="0"
            max="30"
            value={range}
            class="slider"
            id="range-slide"
            onChange={event => setRange(event.target.value)}
          />
          <input
            type="number"
            value="50"
            placeholder="Income"
            id="income-amount"
          />
          <input type="submit" value="See Budget" />
        </form>
      </div>
    );
}

export default InputForm;

