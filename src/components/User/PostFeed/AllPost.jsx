import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import PostEdit from './PostEdit';

class AllPost extends Component {
  render() {
    return (
      <div className="all-post-inner">
        {this.props.posts.map(post => (
          <div key={post.id} className="all-post-main">
            {post.editing ? (
              <PostEdit post={post} key={post.id} />
            ) : (
              <Post post={post} key={post.id} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts });
export default connect(mapStateToProps)(AllPost);
