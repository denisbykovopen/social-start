import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserAvatar from '../../../Assets/empty-avatar.svg';
import CheckingGray from '../../../Assets/checkin_grey.svg';
import Timing from '../../../Assets/Timing.svg';
import Edit from '../../../Assets/edit.svg';

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
            <div className="user-details-inner">
              <h3>User Name</h3>
              <div className="user-role-cluster">
                <img src={CheckingGray} alt="CheckingGray" />
                <div>пользователь</div>
              </div>
              <div className="now-date-cluster">
                <div>
                  {' '}
                  {new Date().toLocaleDateString('ru', {
                    day: 'numeric',
                    month: 'long',
                  })}{' '}
                  в{' '}
                  {new Date().toLocaleTimeString('ru', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}{' '}
                </div>
                <img src={Timing} alt="Timing" />
              </div>
            </div>
            <img src={Edit} alt="Edit" className="post-edit" />
          </div>
          {this.props.post.images.length > 0 && (
            <div className="gallery-container-post">
              <div className="gallery-container-post-inner">
                <div className="gallery-container-row-post">
                  {this.props.post.images.map((url, index, arr) => {
                    var firstImage = arr[index];
                    var secondImage = arr[index + 1];
                    var thirdImage = arr[(index = 2)];
                    return (
                      <React.Fragment>
                        <div className="gallery-card-top">
                          <div className="gallery-card-top-inner">
                            <img
                              className="gallery-thumbnail-top"
                              src={[firstImage]}
                              alt={'Image number ' + (index + 1)}
                            />
                          </div>
                        </div>

                        <div className="gallery-card-post-first">
                          <div className="gallery-card-inner-post">
                            <img
                              className="gallery-thumbnail-post"
                              src={[secondImage]}
                              alt={'Image number ' + (index + 1)}
                            />
                          </div>
                        </div>
                        <div className="gallery-card-post-second">
                          <div className="gallery-card-inner-post">
                            <img
                              className="gallery-thumbnail-post"
                              src={[thirdImage]}
                              alt={'Image number ' + (index + 1)}
                            />
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                  <div className="gallery-index-post">
                    +{Object.keys(this.props.post.images).length - 2}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="post-content">
            {/* {this.props.post.title.length > 0 && (
              <h2 className="post-title">{this.props.post.title}</h2>
            )} */}

            <p
              className={
                this.state.change ? 'compact' : 'post-message'
              }
            >
              {this.props.post.message}
              <div
                className="gradient-hide"
                onClick={this.change}
              ></div>
            </p>

            <div className="post-control-buttons">
              {/* <div
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
            </div> */}
              <div>Нравиться</div>
              <div>Комментировать</div>
              <div>Поделиться</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(Post);
