import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';
class AllPost extends Component {
  render() {
    return (
      <div className="all-post-inner">
        {this.props.posts.map(post => (
          <div 
            key={post.id}
            className="all-post-main"
          >
            {post.editing ? (
              <EditComponent post={post} key={post.id} />
            ) : (
              <Post post={post} key={post.id} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(AllPost);
