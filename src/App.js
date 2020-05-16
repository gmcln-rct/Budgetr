import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import InputForm from './components/InputForm';
import ExpenseSavings from './components/ExpenseSavings';

// import {BudgetContextProvider} from './context/BudgetContext';


function App() {
  return (
    <div className="App">
      {/* <BudgetContextProvider> */}
        <Header/>
        <InputForm />
        <ExpenseSavings />
      {/* </BudgetContextProvider> */}


    </div>
  );
}

export default App;
