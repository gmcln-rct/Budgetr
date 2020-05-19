import React, {useContext} from 'react';
import './App.scss';

import Header from './components/Header';
import InputForm from './components/InputForm';
import ExpenseSavings from './components/ExpenseSavings';
import GoogleLogin from "react-google-login";



import {Login} from "./components/Login";

import {BudgetContext, BudgetContextProvider} from './context/BudgetContext';

function App() {

  const budgetContext = useContext(BudgetContext);



  return (
    <div className="App">
      <section className="app-hub">

          <Header />
          <BudgetContextProvider>

            {budgetContext.loggedin ? (
              <InputForm />
            ) : (
              <Login />
            )
            
            }

      </BudgetContextProvider>
      </section>

    </div>
  );
}

export default App;
