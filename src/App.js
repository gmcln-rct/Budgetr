import React, {useContext} from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import {Login} from "./components/Login";
import ExpenseSavings from './components/ExpenseSavings';

import './App.scss';

import {BudgetContext, BudgetContextProvider} from './context/BudgetContext';

function App() {

  const budgetContext = useContext(BudgetContext);
  const {loggedIn} = budgetContext;

  console.log(budgetContext.loggedIn);

  return (
    <div className="App">
      <section className="app-hub">
          <Header />
          <BudgetContextProvider>

              <Login />

                <InputForm />

      </BudgetContextProvider>
      </section>

    </div>
  );
}

export default App;
