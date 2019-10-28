import React, { Component } from 'react';
import Loading from './../../components/Loading/Loading.js'
import Api from "./../../helpers/api";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends Component {
  constructor() {
    super();
    this.myChangeHandler = this.myChangeHandler.bind(this);
    
    this.state = {
      newUser: {
        username: "",
        email: "",
        password: "",
      }
    }
  }
  
  myChangeHandler(event) {
    let newUser = {...this.state.newUser};
    newUser[event.target.name] = event.target.value;
    this.setState({newUser: newUser});
  }
  
  async mySubmitHandler(event) {
    event.preventDefault()

    this.setState({
      loading: true
    });

    try {
      const data = await Api.post("/users", this.state.newUser);
      localStorage.setItem('authenticationToken', data.data.token);
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({
        loading: false,
        newUser: { username: "", email: "", password: "" }
      });
      console.log("la petición termino");
    }
  }

  render () {
    if (this.state.loading) return <Loading/>;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Card className="mt-5">
              <Card.Header>
                <h5 className="m-0">Register</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={this.mySubmitHandler.bind(this)}>
                  <Form.Group >
                    <Form.Control 
                      name="username" 
                      type="text" 
                      placeholder="Username" 
                      onChange={this.myChangeHandler} 
                      value={this.state.newUser.username}
                    />
                  </Form.Group>

                  <Form.Group >
                    <Form.Control 
                      name="email" 
                      type="text" 
                      placeholder="Email" 
                      onChange={this.myChangeHandler} 
                      value={this.state.newUser.email}
                    />
                  </Form.Group>
        
                  <Form.Group >
                    <Form.Control 
                      name="password" 
                      type="password" 
                      placeholder="Password" 
                      onChange={this.myChangeHandler} 
                      value={this.state.newUser.password}
                    />
                  </Form.Group>

                  <Button variant="success" type="submit">
                    Create User
                  </Button>
                </Form>  
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Register;
