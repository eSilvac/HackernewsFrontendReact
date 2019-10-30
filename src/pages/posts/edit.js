import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

import PostForm from './../../components/PostFormEdit/PostFormEdit'
import PostApi from "./../../helpers/api";
import Loading from './../../components/Loading/Loading.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

class EditPost extends Component {
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
      const { data } = await PostApi.get("/posts/" + this.props.location.state.id);
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
    const { error, loading, redirect } = this.state;

    if (loading) return <Loading/>;
    if (error) return <p>Upps! Algo salío mal</p>;
    if (redirect) return <Redirect to='/'/>;;
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={6}>
            <Card className="mt-5">
              <Card.Header>
                <h5 className="m-0">Edit Post</h5>
              </Card.Header>
              <Card.Body>
                <PostForm postId={this.props.location.state.id} postParams={{title: this.state.data.title, url: this.state.data.url}}/>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditPost;
