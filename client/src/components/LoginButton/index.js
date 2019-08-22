import React from "react";
import GoogleLogin from 'react-google-login'; // Google login
import GoogleLogout from 'react-google-login';
import config from "../../auth_config.json";
import "./style.css";


const GoogleLoginButton = (props) => {

  return (
    <div className="Login">
      { !props.isAuthenticated ? (
        <div>
          <GoogleLogin
            clientId={config.GOOGLE_CLIENT_ID}
            buttonText={props.children}
            onSuccess={props.onSuccess}
            // onFailure={props.onFailure}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        </div>      
        ) : ( 
          <GoogleLogout
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={props.logout}
          >
        </GoogleLogout>
        ) 
      }
    </div>
  );
};

export default GoogleLoginButton;
