
import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import React from 'react';

const responseFacebook = (response) => {
  console.log(response);
}

class Login extends React.Component {
  render(){
    return(
      <div>This is the login page
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
          >Login with facebook
        </FacebookLogin>
        </div>
    )
  } 
}
export default Login
