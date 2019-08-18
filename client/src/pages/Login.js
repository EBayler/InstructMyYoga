// src/components/NavBar.js
import React from "react";
import ReactDOM from 'react-dom'; // Google login
import GoogleLogin from 'react-google-login'; // Google login
import { useAuth0 } from "../components/Auth0/index";
import API from "../utils/API";
import config from "../auth_config.json";

const NavBar = () => {
  const { loginWithRedirect, logout } = useAuth0();
  const isAuthenticated = false;

// Google Login:
const responseGoogle = (response) => {
    console.log(response);
    console.log(response.w3.ig);
    console.log(response.googleId);
    loginUser(response.googleId);

  }

const loginUser = (googleId) => {
    console.log("In loginUser in Login.js");
    API.loginUser(googleId)
    .then(res => {
      console.log(res);
    });
  }

  return (
    <div>
      {!isAuthenticated && (
        <div>
        <button
          onClick={() =>
            loginWithRedirect({})
            .then( (response) => {
              console.log(response);
            })
          }
        >
          Log in
        </button>
        <GoogleLogin
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          // Maybe use these for redirect if I can't find another way.
          //uxMode='redirect'
          // redirectUri="http://localhost:3000/classlist"
        ></GoogleLogin>
    </div>      
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;
