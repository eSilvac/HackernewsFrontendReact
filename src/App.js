import React, { Component } from 'react';
import './static/App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Application from './pages/layout/Application.js'
import Posts from './pages/posts/index'
import NewPost from './pages/posts/new'
import Register from './pages/users/register'

class App extends Component {
  render() {
    return (	
      <Router>
	<Application />
        <Switch>
          <Route path="/register" component={Register}  />
          <Route path="/posts/new" component={NewPost}  />
          <Route path="/" component={Posts} />
        </Switch>
      </Router>	
    );
  }
}

export default App;
