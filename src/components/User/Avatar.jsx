import React from "react";
import ReactAvatarEditor from "react-avatar-editor";
import UserGray from '../../assets/user_gray.svg';
import Camera from '../../assets/camera.svg';

export default class App extends React.Component {
  state = {
    image: UserGray,
    allowZoomOut: false,
    position: { x: 0.5, y: 0.5 },
    scale: 1,
    rotate: 0,
    borderRadius: 100,
    preview: null,
    width: 125,
    height: 125
  };

  handleNewImage = e => {
    this.setState({ image: e.target.files[0] });
    console.log('console', this.state.image);
  };

  handleScale = e => {
    const scale = parseFloat(e.target.value);
    this.setState({ scale });
  };

  handlePositionChange = position => {
    this.setState({ position });
  };

  render() {
    return (
      <div className="avatar">
        <div className="avatar-inner">
          <ReactAvatarEditor
            className="canvas"
            scale={parseFloat(this.state.scale)}
            width={this.state.width}
            height={this.state.height}
            position={this.state.position}
            onPositionChange={this.handlePositionChange}
            rotate={parseFloat(this.state.rotate)}
            // borderRadius={this.state.width / (100 / this.state.borderRadius)}
            image={this.state.image}
            borderRadius={100}
            border={-1}
          />
          <div className="image-upload">
            <label htmlFor="file-input">
                <img
                    src={Camera}
                    alt="New avatar"
                />
            </label>
            <input
                id="file-input"
                type="file" 
                onChange={this.handleNewImage} 
                // capture style={{display: 'none'}}  
            />
          </div>
          
        </div>
       
        {/* Zoom:
        <input
          name="scale"
          type="range"
          onChange={this.handleScale}
          min={this.state.allowZoomOut ? "0.1" : "1"}
          max="2"
          step="0.01"
          defaultValue="1"
        /> */}
      </div>
    );
  }
}

