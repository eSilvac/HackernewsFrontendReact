import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { UserConsumer } from "./../../context/userContext";
import PostDeleteButton from "./../PostDeleteButton/PostDeleteButton"

class Posts extends Component {
  render () {
    return (
      <UserConsumer>
        {({user}) => (
          <section>
            {user ? (
              <div className="actions">
                {user._id === this.props.postUserId ? (
                  <div>
                    <PostDeleteButton postId={this.props.postId} />
                    <Link 
                      className="btn btn-warning" 
                      to={{
                        pathname: '/posts/edit',
                        state: {
                          id: this.props.postId
                        }
                      }}
                    >Edit</Link>
                  </div>
                ) : ""
                }
              </div>
            ) : ""
            }
          </section>
        )}
      </UserConsumer>
    );
  }
}

export default Posts;
