import React, {useContext, useState, useEffect} from 'react'

const InputForm = () => {



    return (
      <div>
        <form className="budget-input">
          <label for="range-slider">Select Your Percentage</label>
          <input
            type="range"
            min="0"
            max="30"
            value="15"
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

