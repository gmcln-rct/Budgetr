import React from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import InputForm from './components/InputForm';
import ExpenseSavings from './components/ExpenseSavings';
import GoogleLogin from "react-google-login";

// import {BudgetContextProvider} from './context/BudgetContext';

function App() {

  const responseGoogle = (response) => {
    console.log(response);
  };
 
  return (
    <div className="App">
        <h1>Login With Google</h1>
      <GoogleLogin
        clientId="61293796729-0fsefe1s50otl643rp5jchbvfikui0ce.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
