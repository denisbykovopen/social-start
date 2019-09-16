import React from 'react';
import DownLoad from '../../../Assets/download.svg';
import Camera from '../../../Assets/camera.svg';
import './ImageBg.css';

export default class ImageBg extends React.Component {
  state = {
    image: '',
  };
  onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = e => {
        this.setState({ image: e.target.result });
      };
      reader.readAsDataURL(event.target.files[0]);
      if (!event.target.files[0].type.match('images/*')) {
        alert('только изображения');
        reader.onload = e => {
          this.setState({ image: '' });
        };
        return;
      }
      event.preventDefault();
    }
  };
  render() {
    return (
      <div
        className="image-bg"
        style={{
          backgroundImage: `url(${this.state.image})`,
        }}
      >
        {!this.state.image && (
          <React.Fragment>
            <span>Привет, загрузите свою обложку</span>
            <img src={DownLoad} alt="Here" />
          </React.Fragment>
        )}

        <div className="image-bg-upload">
          <label htmlFor="image-bg-input">
            <img src={Camera} alt="New avatar" />
          </label>
          <input
            id="image-bg-input"
            type="file"
            accept="image/*"
            onChange={this.onImageChange}
            // capture style={{display: 'none'}}
          />
        </div>
      </div>
    );
  }
}
