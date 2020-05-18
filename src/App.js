import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import InputForm from './components/InputForm';
import ExpenseSavings from './components/ExpenseSavings';
import GoogleLogin from "react-google-login";
import {Login} from "./components/Login";

// import {BudgetContextProvider} from './context/BudgetContext';

function App() {

  
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [url, setUrl] = useState("");
  
  // const responseGoogle = (response) => {
  //   setName(response.profileObj.name);
  //   setEmail(response.profileObj.email);
  //   setUrl(response.profileObj.url);
  // };


  return (
    <div className="App">
      <Header />

      <Login />

      <InputForm />
    </div>
  );
}

export default App;
