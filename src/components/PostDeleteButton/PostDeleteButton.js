import React, { Component } from 'react';
import { Redirect } from 'react-router';

import Api from "./../../helpers/api";

import Button from 'react-bootstrap/Button'

class PostForm extends Component {
  state = {
    redirect: false
  }
  
  async myButtonHandler(event) {
    event.preventDefault()
    try {
      await Api.delete("/posts/" + this.props.postId);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        redirect: true
      });
    }
  }

  render () {
    if (this.state.redirect) return <Redirect push to='/'/>;
    return (
      <Button onClick={this.myButtonHandler.bind(this)}className="btn btn-danger mr-2">Delete</Button>
    );
  }
}

export default PostForm;
