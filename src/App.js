import React, {useContext} from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import {Login} from "./components/Login";
import ExpenseSavings from './components/ExpenseSavings';

import './App.scss';

import {BudgetContext, BudgetContextProvider} from './context/BudgetContext';

function App() {

  const budgetContext = useContext(BudgetContext);
  const login = budgetContext.loggedIn;




  return (
    <div className="App">
      <main className="app-hub">
          <Header />
          <BudgetContextProvider>

            <Login />

          <p> Loggedin? {budgetContext.loggedIn}</p>

              <InputForm />

      </BudgetContextProvider>
      </main>

    </div>
  );
}

export default App;
