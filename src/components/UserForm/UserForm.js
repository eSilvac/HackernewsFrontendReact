import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Utilits
import Loading from './../../components/Loading/Loading.js'
import Api from "./../../helpers/api";

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NavbarLinks extends Component {
  constructor(props) {
    super(props);

    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.state = {
      userParams: this.props.userParams,
    }
  }
  
  myChangeHandler(event) {
    let userParams = {...this.state.userParams};
    userParams[event.target.name] = event.target.value;
    this.setState({userParams: userParams});
  }
  
  async mySubmitHandler(event) {
    event.preventDefault()

    this.setState({
      loading: true
    });

    try {
      const data = await Api.post(this.props.path, this.state.userParams);
      localStorage.setItem('authenticationToken', data.data.token);
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({
        loading: false,
        redirect: true
      });
    }
  }
  
  render () {
    if (this.state.redirect) return <Redirect to='/'/>;;
    return (
      <Form onSubmit={this.mySubmitHandler.bind(this)}>

      {(this.props.newUser) ? (
        <Form.Group >
          <Form.Control 
            name="username" 
            type="text" 
            placeholder="Username" 
            onChange={this.myChangeHandler} 
            value={this.state.userParams.username}
          />
        </Form.Group>

      ) : (
        ""
      )}  

        <Form.Group >
          <Form.Control 
            name="email" 
            type="text" 
            placeholder="Email" 
            onChange={this.myChangeHandler} 
            value={this.state.userParams.email}
          />
        </Form.Group>

        <Form.Group >
          <Form.Control 
            name="password" 
            type="password" 
            placeholder="Password" 
            onChange={this.myChangeHandler} 
            value={this.state.userParams.password}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>  
    );
  }
}

export default NavbarLinks;
