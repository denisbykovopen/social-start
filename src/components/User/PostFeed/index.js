import React from 'react';
import UserAvatar from '../../../Assets/empty-avatar.svg';
import PostForm from './PostForm';
import AllPost from './AllPost';
import './PostFeed.css';

export default class PostFeed extends React.Component {
  state = {
    isOpen: false,
  };
  handlePost = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    return (
      <div className="post-feed">
        <div className="post-feed-inner">
          <h3>Стена</h3>
          <div className="post-feed-button" onClick={this.handlePost}>
            <img src={UserAvatar} alt="UserAvatar" />
            <span>Поделись новостью!</span>
          </div>
          {this.state.isOpen && <PostForm />}
          <div className="all-post">
            <AllPost />
          </div>
        </div>
      </div>
    );
  }
}
