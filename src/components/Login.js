import React, { useState, useContext } from 'react';
import GoogleLogin from "react-google-login";

import {BudgetContext} from '../context/BudgetContext';

export const Login = () => {

    const budgetContext = useContext(BudgetContext);

    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");


    const responseGoogle = (response) => {
        budgetContext.setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.url);

        budgetContext.setLoggedIn(true);
    };

    return (
        <div className="login-container">
            <h1>Login With Google</h1>
            <GoogleLogin
                clientId="61293796729-0fsefe1s50otl643rp5jchbvfikui0ce.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="google-login"
                cookiePolicy={"single_host_origin"}
            />

        </div>
    )
}
