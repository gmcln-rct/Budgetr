import React, { useState, createContext, useContext } from 'react';

export const BudgetContext = createContext({
    range: 15,
    income: 0,
    expense: 0,
    savings: 0,
    name: "",
    loggedIn: "",
    toggleResults: false
});

//  export const BudgetContextProvider;

export function BudgetContextProvider(props) {

    const budgetContext = useContext(BudgetContext);

    const [name, setName] = useState(budgetContext.name);
    const [loggedIn, setLoggedIn] = useState(budgetContext.loggedIn);
    const [expense, setExpense] = useState(budgetContext.expense);
    const [savings, setSavings] = useState(budgetContext.savings);
    const [toggleResults, setToggleResults] = useState(budgetContext.toggleResults);

    const provider = {
        expense,
        setExpense: (expense) => {
            setExpense(expense);
        },
        savings,
        setSavings: (savings) => {
            setSavings(savings);
        },
        name,
        setName: (name) => {
            setName(name);
        },
        loggedIn,
        setLoggedIn: (loggedIn) => {
            setLoggedIn(loggedIn);
        },
        toggleResults,
        setToggleResults: (toggleResults) => {
            setToggleResults(toggleResults);
        },
    };

    return (
        <BudgetContext.Provider value={provider}>
            {props.children}
        </BudgetContext.Provider>
    );
};

