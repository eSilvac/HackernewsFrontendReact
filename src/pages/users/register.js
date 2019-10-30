import React, { Component } from 'react';
import Loading from './../../components/Loading/Loading.js'
import Api from "./../../helpers/api";

// Utilities
import UserForm from './../../components/UserForm/UserForm'

// Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends Component {
  render () {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Card className="mt-5">
              <Card.Header>
                <h5 className="m-0">Register</h5>
              </Card.Header>
              <Card.Body>
                <UserForm userParams={{username:"", email: "", password: ""}} newUser={true} path={"/users"} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
