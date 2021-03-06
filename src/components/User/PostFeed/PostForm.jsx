import React, { Component } from 'react';
import { connect } from 'react-redux';
import Camera from '../../../assets/camera.svg';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      images: [],
    };
    this.fileReader = new FileReader();
  }
  setImages = e => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({
          images: this.state.images.concat(e.target.result),
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  handleSubmit = e => {
    e.preventDefault();
    // const title = this.getTitle.value;
    const message = this.getMessage.value;
    const images = this.state.images;

    const data = {
      id: new Date(),
      // title,
      message,
      editing: false,
      images,
    };
    this.props.dispatch({
      type: 'ADD_POST',
      data,
    });
    // this.getTitle.value = '';
    this.getMessage.value = '';
    this.setState = {
      images: [],
    };
  };
  render() {
    return (
      <div className="post-form-container">
        <h3 className="post-form-heading">Поделись новостью!</h3>
        <form className="post-form" onSubmit={this.handleSubmit}>
          {/* <input
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Заглавие"
          /> */}
          <textarea
            required
            ref={input => (this.getMessage = input)}
            placeholder="Введите текст"
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
          <button className="post-form-button">Опубликовать</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);
