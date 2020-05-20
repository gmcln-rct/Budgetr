import React, {useContext} from 'react';

import {BudgetContext} from '../context/BudgetContext';

export const Button = () => {

    // const budgetContext = useContext(BudgetContext);
    const { toggleResults, setToggleResults } = useContext(BudgetContext);

    return (
        <button onClick={() => setToggleResults(true)}>
            Confirm
        </button>
    )
}
