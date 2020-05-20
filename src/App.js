import React, {useContext} from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import {Login} from "./components/Login";
import ExpenseSavings from './components/ExpenseSavings';
import {Button} from './components/Button';

import './App.scss';

import {BudgetContext, BudgetContextProvider} from './context/BudgetContext';



function App() {




  return (
    <div className="App">
      <main className="app-hub">
          <Header />
          <BudgetContextProvider>

            <Login />


            <InputForm />
            <ExpenseSavings />

      </BudgetContextProvider>
      </main>

    </div>
  );
}

export default App;
