import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import Loading from './../Loading/Loading.js'
import Api from "./../../helpers/api";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PostForm extends Component {
  constructor() {
    super();
    this.myChangeHandler = this.myChangeHandler.bind(this);
    
    this.state = {
      newPost: {
        title: "",
        url: "",
      }
    }
  }
  
  myChangeHandler(event) {
    let newPost = {...this.state.newPost};
    newPost[event.target.name] = event.target.value;
    this.setState({newPost: newPost});
  }
  
  async mySubmitHandler(event) {
    event.preventDefault()

    this.setState({
      loading: true
    });

    try {
      const data = await Api.post("/posts", this.state.newPost);
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({
        loading: false,
      });
      return <Redirect to='/' />
    }
  }

  render () {
    const { error, loading } = this.state;

    if (loading) return <Loading/>;
    if (error) return <p>Upps! Algo salío mal</p>;
    return (
      <Form onSubmit={this.mySubmitHandler.bind(this)}>
        <Form.Group >
          <Form.Control 
            name="title" 
            type="text" 
            placeholder="Post Title" 
            onChange={this.myChangeHandler} 
            value={this.state.newPost.title}
          />
        </Form.Group>

        <Form.Group >
          <Form.Control 
            name="url" 
            type="text" 
            placeholder="Post Url" 
            onChange={this.myChangeHandler} 
            value={this.state.newPost.url}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Create Post
        </Button>
      </Form>  
    );
  }
}

export default PostForm;
