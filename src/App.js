import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import InputForm from './components/InputForm';
import ExpenseSavings from './components/ExpenseSavings';


function App() {
  return (
    <div className="App">

      <Header/>
      <InputForm />
      <ExpenseSavings />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
