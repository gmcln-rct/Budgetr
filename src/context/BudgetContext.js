import React, { useState, createContext, useContext } from 'react';

export const BudgetContext = createContext({
    range: 15,
    income: 0,
    expense: 0,
    savings: 0,
    name: "",
});

//  export const BudgetContextProvider;

export function BudgetContextProvider(props) {
    const budgetContext = useContext(BudgetContext);
    const [name, setName] = useState(budgetContext.name);
    // const [dictionary, setDictionary] = useState(languageContext.dictionary);

    const provider = {
        name,
        setName: (name) => {
            setName(name);
            // setDictionary(dictionaryList[selectedLanguage.id]);
        }
    };

    return (
        <BudgetContext.Provider value={provider}>
            {props.children}
        </BudgetContext.Provider>
    );
};

//     // const budgetContext = useContext(BudgetContext);
//     // const [range, setRange] = useState(15);
//     // const [income, setIncome] = useState(0);
//     //  const [range, setRange] = useState(budgetContext.range);
//     //  const [income, setIncome] = useState(budgetContext.income);
//     // const [range] = useState(budgetContext.range);
//     // const [income] = useState(budgetContext.income);
//     // const [expense] = useState(budgetContext.expense);
//     // const [savings] = useState(budgetContext.savings);
    

//     const provider = {
//         // range, 
//         // income, 
//         // expense,
//         // savings,
//     }

//     return (
//         <BudgetContext.Provider value={ provider}>
//             {props.children}
//         </BudgetContext.Provider>
//     );

// }

// // export default BudgetContextProvider;