import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/Header';
import InputForm from './components/InputForm';
import ExpenseSavings from './components/ExpenseSavings';
import GoogleLogin from "react-google-login";

// import {BudgetContextProvider} from './context/BudgetContext';

function App() {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  
  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.url);
  };


  return (
    <div className="App">
        <h1>Login With Google</h1>
      <GoogleLogin
        clientId="61293796729-0fsefe1s50otl643rp5jchbvfikui0ce.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      
      <Header />
      <InputForm />
    </div>
  );
}

export default App;
