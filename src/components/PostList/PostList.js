import React, { Component } from 'react';
import Post from './../Post/Post.js'
import Loading from './../Loading/Loading.js'
import PostApi from "./../../helpers/api";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

class Posts extends Component {
  state = {
    data: [],
    error: null,
    loading: false  
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });

    try {
      const { data } = await PostApi.get("/posts");
      this.setState({ data });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render () {
    const { data, error, loading } = this.state;

    if (loading) return <Loading/>;
    if (error) return <p>Upps! Algo salío mal</p>;
    return (
      <Row className="p-3">
        <Col>
          <ListGroup>
            {data.map ((post, index) =>
              <Post key={index} post={post} index={index + 1} />
            )}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

export default Posts;
