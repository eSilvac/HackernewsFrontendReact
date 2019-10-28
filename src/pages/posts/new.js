import React, { Component } from 'react';

import PostForm from './../../components/PostForm/PostForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class Register extends Component {
  render () {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Card className="mt-5">
              <Card.Header>
                <h5 className="m-0">New Post</h5>
              </Card.Header>
              <Card.Body>
                <PostForm />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
