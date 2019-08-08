import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import React from 'react';
import ReactDOM from 'react-dom';



const responseFacebook = (response) => {
  console.log(response);
}

// const responseGoogle = (response) => {
//   console.log(response);
// }

// <div className="App">
// <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

// <FacebookLogin
// appId="" //APP ID NOT CREATED YET
// fields="name,email,picture"
// callback={responseFacebook}
// />
// <br />
// <br />


// <GoogleLogin
// clientId="" //CLIENTID NOT CREATED YET
// buttonText="LOGIN WITH GOOGLE"
// onSuccess={responseGoogle}
// onFailure={responseGoogle}
// />

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