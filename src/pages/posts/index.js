import React, { Component } from 'react';
import PostsList from './../../components/PostList/PostList.js'

import Container from 'react-bootstrap/Container'

class Posts extends Component {  
  render () {
    return (
      <Container>
        <PostsList/>
      </Container>
    );
  }
}

export default Posts;
