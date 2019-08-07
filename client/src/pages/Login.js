import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class App extends Component {

  state = {
    loggedIn: false,
    userId: ""
  };

  render() {
    <FacebookLogin
      appId="1088597931155576"
      autoLoad={true}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} 
      />
  }
   
 

  

    // const responseFacebook = (response) => {
    //   console.log(response);
    // }

    // const responseGoogle = (response) => {
    //   console.log(response);
    // }

    // return ({
    //   <div className="App">
    //     <h1>LOGIN WITH FACEBOOK or GOOGLE</h1>

    //   // <FacebookLogin>
    //   //   appId="" //APP ID NOT CREATED YET
    //   //   fields="name,email,picture"
    //   //   callback={responseFacebook}
    //   // />
    //   // <br />
    //   // <br />


     
    //   </div>
    // )};



export default App;