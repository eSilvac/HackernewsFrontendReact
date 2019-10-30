import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import Loading from './../Loading/Loading.js'
import Api from "./../../helpers/api";

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.myChangeHandler = this.myChangeHandler.bind(this);
    
    this.state = {
      editPost: this.props.postParams    
    }
  }
  
  myChangeHandler(event) {
    let editPost = {...this.state.editPost};
    editPost[event.target.name] = event.target.value;
    this.setState({editPost: editPost});
  }
  
  async mySubmitHandler(event) {
    event.preventDefault()

    this.setState({
      loading: true
    });

    try {
      await Api.patch("/posts/" + this.props.postId, this.state.editPost);
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
    const { error, loading, redirect } = this.state;

    if (loading) return <Loading/>;
    if (error) return <p>Upps! Algo salío mal</p>;
    if (redirect) return <Redirect to='/'/>;;
    return (
      <Form onSubmit={this.mySubmitHandler.bind(this)}>
        <Form.Group >
          <Form.Control 
            name="title" 
            type="text" 
            placeholder="Post Title" 
            onChange={this.myChangeHandler} 
            value={this.state.editPost.title}
          />
        </Form.Group>

        <Form.Group >
          <Form.Control 
            name="url" 
            type="text" 
            placeholder="Post Url" 
            onChange={this.myChangeHandler} 
            value={this.state.editPost.url}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Edit Post
        </Button>
      </Form>  
    );
  }
}

export default PostForm;
