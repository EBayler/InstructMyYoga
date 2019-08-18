import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from ".pages/Header";
import Login from "./pages/Login";
import Class from "./pages/Class";
import ClassList from "./pages/ClassList"
import NoMatch from "./pages/NoMatch";
import './App.css';

//import NavBar from "./pages/Login";
// import { useAuth0 } from "./react-auth0-wrapper";

class App extends Component {

  state = {
    loggedIn: false,
    userId: ""
  }

  render() {
    return (  
    <Router>
      <div>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/class" component={Class} />
        <Route exact path="/class/:id" component={Class} />
        <Route exact path="/classlist" component={ClassList} />
        <Route component={NoMatch} />
        </Switch>
      </div> 
    </Router>
    );
  }
}

export default App;

