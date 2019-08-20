import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Class from "./pages/Class";
import ClassList from "./pages/ClassList"
import API from "./utils/API";
import NoMatch from "./pages/NoMatch";
import './App.css';
import GoogleLoginButton from "./components/LoginButton";
import NavBar from "./components/Navbar";

class App extends Component {

  state = {
    isAuthenticated: false,
    userId: "",
    classes: []
  }

  // Google Login:
  responseGoogle = (response) => {
    console.log(response);
    console.log(response.w3.ig);
    console.log(response.googleId);
    this.loginUser(response);
  }

  loginUser = (googleInfo) => {
    API.loginUser(googleInfo.Id)
    .then( (res) => {
      console.log(res.data[0].classes);
      this.setState({
        isAuthenticated: true,
        userId: googleInfo.googleId,
        classes: res.data[0].classes
      });
      // console.log(res);
      // console.log(`User is set to: ${this.state.userId}`);
      // console.log(`This user has the following classes ${this.state.classes[0].className}`)
    });
  }

  logout = () => {
    console.log("logout was pressed");
    this.setState({
      isAuthenticated: false
    })
    return (
      <Redirect to={'/login'}/>
    )
  }

  render() {
    console.log('state', this.state.classes);
    return (
    <div> 
      <GoogleLoginButton
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        response={this.responseGoogle}
        isAuthenticated={this.state.isAuthenticated}
      >
      Log In With Google
      </GoogleLoginButton> 
      <NavBar /> 
      <Router>
        <div>
          <Switch>
          <Route exact path="/" render={() => this.state.isAuthenticated ? <ClassList classes={this.state.classes} /> : <Redirect to={'/login'} />} />
          <Route exact path="/login" render={() => !this.state.isAuthenticated ? <Login /> : <Redirect to={'/'} />}/>
          <Route exact path="/class" component={Class} />
          <Route exact path="/class/:id" component={Class} />
          {/*<Route exact path="/classlist" component={ClassList} classes={this.state.classes}/> */}
          <Route component={NoMatch} />
          </Switch>
        </div> 
      </Router>
    </div>
    );
  }
}

export default App;

