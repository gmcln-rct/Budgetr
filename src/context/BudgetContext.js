import React, { useState, createContext, useContext } from 'react';

export const BudgetContext = createContext({
    expense: 0,
    savings: 0
});

export function BudgetContextProvider(props) {

    const budgetContext = useContext(BudgetContext);
    const [expense, setExpense] = useState(budgetContext.expense);
    const [savings, setSavings] = useState(budgetContext.savings);

    const provider = {
        expense,
        savings,
    }

    return (
        <BudgetContext.Provider value={provider}>
            {props.children}
        </BudgetContext.Provider>
    )


}

export default BudgetContext;