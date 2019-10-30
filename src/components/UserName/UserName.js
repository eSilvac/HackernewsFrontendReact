import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

import UserName from './../UserName/UserName';
import Api from "./../../helpers/api";

class Posts extends Component {
  state = {
    user: null,
    error: null,
    loading: true
  };
  
  async componentDidMount() {
    this.setState({
      loading: true
    });

    try {
      const { data } = await Api.get("/user/" + this.props.userId);
      this.setState({ user: data });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render () {
    if (this.state.loading) return <p className="small text-muted m-0">Loading...</p>
    return (
      <p className="m-0">By: {this.state.user.username}</p>
    );
  }
}

export default Posts;
