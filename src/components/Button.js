import React, {useContext} from 'react';

import {BudgetContext} from '../context/BudgetContext';

export const Button = () => {

    const { toggleResults, setToggleResults } = useContext(BudgetContext);

    const budgetContext = useContext(BudgetContext);

    const currentToggle = toggleResults;

    if (!budgetContext.loggedIn || budgetContext.toggleResults) {
        return null;
    }

    return (
        <button onClick={() => setToggleResults(!currentToggle)}>
            Confirm
        </button>
    )
}
