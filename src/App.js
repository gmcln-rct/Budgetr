import React from 'react';

import Header from './components/Header';
import InputForm from './components/InputForm';
import {Login} from "./components/Login";
import {Button} from './components/Button';

import './App.scss';

import {BudgetContextProvider} from './context/BudgetContext';



function App() {

  return (
    <div className="App">
      <main className="app-hub">
          <Header />
          <BudgetContextProvider>
            <Login />
            <InputForm />
            <Button />
      </BudgetContextProvider>
      </main>

    </div>
  );
}

export default App;
