import React from 'react'

const InputForm = () => {
    return (
      <div>
        <form className="budget-input">
          <input
            type="range"
            min="1"
            max="100"
            value="50"
            class="slider"
            id="range-slide"
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

