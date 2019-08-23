import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Class from "./pages/Class";
import ClassList from "./pages/ClassList"
import API from "./utils/API";
import NoMatch from "./pages/NoMatch";
import './App.css';
import GoogleLoginButton from "./components/LoginButton";

class App extends Component {

  state = {
    isAuthenticated: false,
    userId: "",
    classes: []
  }

  // Google Login:
  responseGoogle = (response) => {
    this.loginUser(response);
  }

  loginUser = (googleInfo) => {
    API.loginUser(googleInfo.Id)
    .then( (res) => {
      console.log(res.data);
      this.setState({
        isAuthenticated: true,
        userId: googleInfo.googleId,
        classes: res.data.classes
      });
    });
  }

  logout = () => {
    console.log("logout was pressed");
    this.setState({
      isAuthenticated: false
    })
    console.log(`current state is: ${this.state.isAuthenticated}`);
    return (
      <Redirect to={'/login'} />
      
    )
  }

  render() {
    console.log('state', this.state.classes);
    return (
    <div className="google"> 
      <GoogleLoginButton className="googbutt"
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        response={this.responseGoogle}
        isAuthenticated={this.state.isAuthenticated}
        onLogout={this.logout}
      >
      Log In With Google
      </GoogleLoginButton> 
      {/*<Navbar /> */} 
      <Router>
        <div>
          <Switch>
          <Route exact path="/" render={() => this.state.isAuthenticated ? <ClassList classes={this.state.classes} userId={this.state.userId} /> : <Redirect to={'/login'} />} />
          <Route exact path="/login" render={() => !this.state.isAuthenticated ? <Login /> : <Redirect to={'/'} />}/>
          <Route exact path="/class" component={Class} />
          <Route exact path="/class/:id" render={(props) => <Class {...props} />} />
          <Route component={NoMatch} />
          </Switch>
        </div> 
      </Router>
    </div>
    );
  }
}

export default App;

