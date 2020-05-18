import React, { useState } from 'react';
import GoogleLogin from "react-google-login";


export const Login = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const[loggedIn, setLoggedIn] = useState(false);

    const responseGoogle = (response) => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.url);
        setLoggedIn(true);
    };

    return (
        <div>
            <h1>Login With Google</h1>
            <GoogleLogin
                clientId="61293796729-0fsefe1s50otl643rp5jchbvfikui0ce.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                className="google-login"
                cookiePolicy={"single_host_origin"}
            />



            <p>Hello {name}</p>
        </div>
    )
}
