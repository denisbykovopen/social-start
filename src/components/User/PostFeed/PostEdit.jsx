import React, { Component } from 'react';
import { connect } from 'react-redux';
import Camera from '../../../Assets/camera.svg';

class PostEdit extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage,
    };
    this.props.dispatch({
      type: 'UPDATE',
      id: this.props.post.id,
      data: data,
    });
  };
  render() {
    return (
      <div key={this.props.post.id} className="post-form-container">
        <form className="post-form" onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.post.title}
            placeholder="Enter Post Title"
          />

          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            defaultValue={this.props.post.message}
            cols="28"
            placeholder="Enter Post"
          />
          <div className="image-upload-constructor">
            <label htmlFor="image-input-constructor">
              <div className="image-input-constructor-inner">
                <img src={Camera} alt="New avatar" />
                <span>Добавить фото</span>
              </div>
            </label>
            <input
              id="image-input-constructor"
              type="file"
              onChange={this.setImages}
              // capture style={{display: 'none'}}
            />
          </div>
          <button className="post-form-button">Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostEdit);
