import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import ExpenseSlider from './components/ExpenseSlider';

function App() {
  return (
    <div className="App">

      <Header/>
      <ExpenseSlider />

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
