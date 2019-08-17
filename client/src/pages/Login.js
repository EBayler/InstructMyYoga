// src/components/NavBar.js
import React from "react";
import ReactDOM from 'react-dom'; // Google login
import GoogleLogin from 'react-google-login'; // Google login
import { useAuth0 } from "../components/Auth0/index";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

// Google Login:
const responseGoogle = (response) => {
    console.log(response);
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
          clientId="638633219491-en76o5fsd4c9a7r7rertgqa5110qqfum.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        ></GoogleLogin>
    </div>      
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
};

export default NavBar;

/* 

 
ReactDOM.render(
  ,
  document.getElementById('googleButton')
); */