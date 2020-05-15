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
            id="myRange"
          />
        </form>
      </div>
    );
}

export default InputForm;

