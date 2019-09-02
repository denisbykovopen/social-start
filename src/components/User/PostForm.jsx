import React, { Component } from 'react';
import { connect } from 'react-redux';
import Camera from '../../Assets/camera.svg';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      images: []
    }
    this.fileReader = new FileReader;
  }
  setImages = (e) => {
    e.preventDefault();
    // this.setState({images: []});
    // const imageFiles = e.target.files;
    // const filesLength = imageFiles.length;

    // for(var i = 0; i < filesLength; i++) {
    //   let reader = new FileReader();
    //   let file = imageFiles[i];

    //   this.render.onloadend = () => {
    //     this.setState({images: this.state.images.concat(reader.result) });
    //   }
    //   reader.readAsDataURL(file);
    // }
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState({images: this.state.images.concat(e.target.result)});
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const images = this.state.images;

    const data = {
      id: new Date(),
      title,
      message,
      editing: false,
      images
    };
    this.props.dispatch({
      type: 'ADD_POST',
      data,
    });
    this.getTitle.value = '';
    this.getMessage.value = '';
  };
  render() {
    return (
      <div className="post-container">
        <h1 className="post_heading">Поделись новостью!</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Название"
          />
          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            cols="28"
            placeholder="Введите текст"
          />
          <div className="image-upload-constructor">
                    <label htmlFor="image-input-constructor">
                        <img
                            src={Camera}
                            alt="New avatar"
                        />Добавить фото
                    </label>
                    <input
                        id="image-input-constructor"
                        type="file" 
                        onChange={this.setImages}
                        // capture style={{display: 'none'}}  
                    />
          </div>
          <button>Post</button>
        </form>
      </div>
    );
  }
}
export default connect()(PostForm);