
import FacebookLogin from 'react-facebook-login';
// import GoogleLogin from 'react-google-login';
import React from 'react';


FB.getLoginStatus(function(response) {
  statusChangeCallback(response) {
      'connected',
      authResponse: {
      accessToken: '...',
      expiresIn:'...',
      signedRequest:'...',
      userID:'...'
  },
  });

  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }


// const responseFacebook = (response) => {
//   console.log(response);
// }


// class Login extends React.Component {
//   render(){
//     return(
//       <div>This is the login page
//         <FacebookLogin
//           appId="1088597931155576"
//           autoLoad={true}
//           fields="name,email,picture"
//           callback={responseFacebook}
//           cssClass="my-facebook-button-class"
//           icon="fa-facebook"
//           >Login with facebook
//         </FacebookLogin>
//         </div>
//     )
//   } 
// }
export default Login
