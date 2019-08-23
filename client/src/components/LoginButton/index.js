import React from "react";
import GoogleLogin from 'react-google-login'; // Google login
import GoogleLogout from 'react-google-login';
import config from "../../auth_config.json";
import "./style.css";


const GoogleLoginButton = (props) => {

  return (

    
    <div>

      { !props.isAuthenticated ? (
        <div>
          {console.log(`In login state ${props.isAuthenticated}`)}
          <GoogleLogin
            clientId={config.GOOGLE_CLIENT_ID}
            buttonText={props.children}
            onSuccess={props.onSuccess}
            // onFailure={props.onFailure}
            cookiePolicy={'single_host_origin'}
          ></GoogleLogin>
        </div>      
        ) : ( 
        <div>
          {console.log(`In logout state ${props.isAuthenticated}`)}
          <GoogleLogout
          clientId={config.GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={props.onLogout}
          >
          </GoogleLogout>  
        </div>
          
        ) 
      }
    </div>
  );
};

export default GoogleLoginButton;
