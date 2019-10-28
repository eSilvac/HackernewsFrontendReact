import React, { Component } from 'react';
import { Link } from "react-router-dom";

//Bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

// User
import checkValidUser from './../../helpers/user.js';
import Api from "./../../helpers/api";

class Application extends Component {
  state = {
    user: null,
    error: null,
    loading: false  
  };
  
  async componentDidMount() {
    this.setState({
      loading: true
    });

    try {
      const { data } = await Api.get("/user");
      this.setState({ user: data });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">Hackernews</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              {!this.state.user ? (
                <Link className="nav-link" to="/register">Sign up</Link>
              ) : (
                <Link className="nav-link" to="/posts/new">Create Post</Link>
              )}
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    );
  }
}

export default Application;
