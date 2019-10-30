import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Utilities
import UserForm from './../../components/UserForm/UserForm'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Login extends Component {
  render () {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Card className="mt-5">
              <Card.Header>
                <h5 className="m-0">Login</h5>
              </Card.Header>
              <Card.Body>
                <UserForm userParams={{email: "", password: ""}} newUser={false} path={"/session"} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
