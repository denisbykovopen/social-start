import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserAvatar from '../../assets/empty-avatar.svg';

class Post extends Component {
  state = {
    change: false,
  };
  change = () => {
    this.setState(prevState => ({
      change: !prevState.change,
    }));
  };
  render() {
    return (
      <div className="post">
        <div className="post-inner">
          <div className="post-user-details">
            <img src={UserAvatar} alt="UserAvatar" />
            <h3>User Name</h3>
          </div>

          {/* {!(this.props.post.images = []) && ( */}
            <div className="gallery-container">
              <div className="gallery-container-row">
                {this.props.post.images.map((url, index) => {
                  return (
                    <div className="gallery-card">
                      <div className="gallery-card-inner">
                        <img
                          className="gallery-thumbnail"
                          src={url}
                          alt={'Image number ' + (index + 1)}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          {/* )} */}

          <h2 className="post-title">{this.props.post.title}</h2>
          <p
            className={this.state.change ? 'compact' : 'post-message'}
          >
            {this.props.post.message}
            <div
              className="gradient-hide"
              onClick={this.change}
            ></div>
          </p>

          <div className="post-control-buttons">
            <div
              className="edit"
              onClick={() =>
                this.props.dispatch({
                  type: 'EDIT_POST',
                  id: this.props.post.id,
                })
              }
            >
              Править
            </div>
            <div
              className="delete"
              onClick={() =>
                this.props.dispatch({
                  type: 'DELETE_POST',
                  id: this.props.post.id,
                })
              }
            >
              Удалить
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Post);
