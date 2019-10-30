import React, { Component } from 'react';
import './static/App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { UserProvider } from './context/userContext'

import Application from './pages/layout/Application.js'
import Posts from './pages/posts/index'
import NewPost from './pages/posts/new'
import EditPost from './pages/posts/edit'
import Login from './pages/users/login'
import Register from './pages/users/register'

import { UserProvider } from "./context/userContext";

class App extends Component {
  render() {
    return (	
      <Router>
        <UserProvider>
          <Application />
          <Switch>
            <Route path="/register" component={Register}  />
            <Route path="/login" component={Login}  />
            <Route path="/posts/new" component={NewPost}  />
            <Route path="/posts/edit" component={EditPost}  />
            <Route path="/" component={Posts} />
          </Switch>
        </UserProvider> 
      </Router>	
    );
  }
}

export default App;
