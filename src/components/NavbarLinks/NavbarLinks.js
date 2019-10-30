import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { UserConsumer } from "./../../context/userContext";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavbarLinks extends Component {
  render () {
    return (
      <UserConsumer>
        {({user}) => (
          <Navbar.Collapse id="responsive-navbar-nav">
            {!user ? (
              <Nav className="ml-auto">
                <Link className="nav-link mr-2" to="/login">Login</Link>
                <Link className="nav-link" to="/register">Sign up</Link>
              </Nav>
            ) : (
              <Nav className="ml-auto">
                <Navbar.Text className="mr-5">{user.email}</Navbar.Text>
                <Link className="nav-link text-white mr-1" to="/posts/new">Create Post</Link>
                <Link className="nav-link text-white" to="/logout">Log Out</Link>
              </Nav>
            )}
          </Navbar.Collapse>
        )}
      </UserConsumer>
    );
  }
}

export default NavbarLinks;
