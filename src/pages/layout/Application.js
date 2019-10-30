import React, { Component } from 'react';
import { Link } from "react-router-dom";

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'

// User
import NavbarLinks from "./../../components/NavbarLinks/NavbarLinks";

class Application extends Component {
  render() {
    return ( 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">Hackernews</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <NavbarLinks />
        </Container>
      </Navbar> 
    );
  }
}

export default Application;
