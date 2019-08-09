<<<<<<< HEAD
import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import React from 'react';
import ReactDOM from 'react-dom';



const responseFacebook = (response) => {
  console.log(response);
}
=======
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
>>>>>>> 4c78cc373a7eb96ca70f32947adbf1b221c6eb89


class Login extends React.Component {
  render(){
    return(
      
      <div>This is the login page</div>
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"
        >Login with facebook</FacebookLogin>

      )
  } 
}
export default Login
