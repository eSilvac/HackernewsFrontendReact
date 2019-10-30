import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

import UserName from './../UserName/UserName' 
import PostActions from './../PostActions/PostActions'

class Posts extends Component {
  render () {
    return (
      <ListGroup.Item className="d-flex flex-row">
        <div className="vote mr-3">
          <span>Y</span>
          <span>{this.props.index}</span>
        </div>
        <div className="d-flex flex-fill flex-row justify-content-between">
          <div className="information">
            <div className="up d-flex flex-row">
              <p className="my-0">{this.props.post.title}</p>
              <p className="ml-2 my-0 text-muted small">({this.props.post.url})</p>
            </div>
            <div className="down text-muted small d-flex flex-row">
              <p className="my-0">112 points</p>
              <p className="mx-2 my-0">|</p>
              <UserName userId={this.props.post._user}/>
              <p className="mx-2 my-0">|</p>
              <UserName userId={this.props.post._user}/>
              <p className="mx-2 my-0">|</p>
              <p className="my-0">112 comments</p>
            </div>
          </div>
          <PostActions postUserId={this.props.post._user} postId={this.props.post._id} />
        </div>
      </ListGroup.Item>
    );
  }
}

export default Posts;
